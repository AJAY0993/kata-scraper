const fs = require("node:fs")
const path = require("node:path")
const puppeteer = require("puppeteer")
const { PuppeteerScreenRecorder } = require("puppeteer-screen-recorder")

let browser
const {
  difficultyToDirMap,
  extensions,
  sanitizeFolderName
} = require("./utils.js")
const maxRetries = 100
const concurrencyLimit = 5

const scrapKatasSolution = async (katas) => {
  console.log("Starting the scraping process...")

  try {
    browser = await puppeteer.launch({
      headless: true,
      timeout: 10000
    })
  } catch (err) {
    console.log("Error during browser launch 💥", err)
    return
  }

  console.log("Browser launched successfully.")
  const page = await browser.newPage()

  page.on("console", (msg) => {
    console.log(`BROWSER LOG: ${msg.text()}`)
  })

  page.on("pageerror", (err) => {
    console.log(`BROWSER ERROR: ${err.toString()}`)
  })

  page.on("requestfailed", (request) => {
    console.log(
      `BROWSER REQUEST FAILED: ${request.url()} - ${
        request.failure().errorText
      }`
    )
  })

  const recorder = new PuppeteerScreenRecorder(page)

  await recorder.start("./recording.mp4")

  try {
    console.log("Navigating to Codewars sign-in page...")
    await page.goto("https://www.codewars.com/users/sign_in", {
      waitUntil: "networkidle2"
    })

    console.log("Setting viewport size...")
    await page.setViewport({ width: 1080, height: 1024 })

    console.log("Waiting for email and password input fields...")
    await page.waitForSelector("#user_email", { visible: true, timeout: 60000 })
    await page.waitForSelector("#user_password", {
      visible: true,
      timeout: 60000
    })

    console.log("Email:", process.env.CODEWARS_EMAIL ? "Set" : "Not Set")
    console.log("Password:", process.env.CODEWARS_PASSWORD ? "Set" : "Not Set")

    console.log("Typing email")
    await page.type("#user_email", process.env.CODEWARS_EMAIL)
    console.log("Typed email")

    await page.screenshot({ path: "example-screenshot.png" })

    console.log("Typing password")
    await page.type("#user_password", process.env.CODEWARS_PASSWORD)
    console.log("Typed password")

    console.log("Submitting the sign-in form...")
    await page.click('button.is-red[type="submit"]')
  } catch (err) {
    console.log("Error during the login process 💥", err)
    await browser.close()
    return // Exit if login fails
  }

  async function scrapWithRetry(kata, retryCount = 0) {
    try {
      const language = kata["completedLanguages"][0]
      const extension = extensions[language]

      console.log("Navigating to kata solution page...")
      await page.goto(
        `https://www.codewars.com/kata/${kata.id}/solutions/${language}/me/newest`,
        {
          waitUntil: "networkidle2"
        }
      )

      const rank = await page.evaluate(() => {
        const rankElement = document.querySelector(".is-white-rank")
        if (rankElement) {
          return rankElement.textContent
        }
        return null
      })

      if (rank) {
        const codeText = await page.evaluate(() => {
          const solutionsList = document.getElementById("solutions_list")
          if (solutionsList) {
            const solutionItem = solutionsList.querySelector("div")
            if (solutionItem) {
              const preTag = solutionItem.querySelector("pre")
              if (preTag) {
                return preTag.textContent
              }
            }
          }
          return "//null"
        })

        const dirPath = path.join(
          `${__dirname}/katas/${difficultyToDirMap[rank]}/${sanitizeFolderName(
            kata.slug
          )}`
        )
        const filePath = path.join(dirPath, `solution.${extension}`)

        // Ensure directory exists before writing
        if (!fs.existsSync(dirPath)) {
          await fs.promises.mkdir(dirPath, { recursive: true })
        }

        await fs.promises.writeFile(filePath, codeText, "utf-8")
      }
    } catch (error) {
      const isRateLimitError =
        error.message.includes("429") || error.message.includes("rate limit")

      if (isRateLimitError && retryCount < maxRetries) {
        const waitTime = Math.pow(2, retryCount) * 1000
        console.error(`Error fetching kata ${kata.id}:`, error.message)
        console.log(`Retrying in ${waitTime}ms...`)
        await new Promise((resolve) => setTimeout(resolve, waitTime))
        await scrapWithRetry(kata, retryCount + 1)
      } else {
        console.error(`Max retries reached for kata ${kata.id}:`, error.message)
        throw error
      }
    }
  }

  for (let i = 0; i < katas.length; i++) {
    await scrapWithRetry(katas[i])
  }

  await recorder.stop()

  console.log("Closing the browser...")
  await browser.close()
  console.log("Scraping process completed.")
}

module.exports = scrapKatasSolution
