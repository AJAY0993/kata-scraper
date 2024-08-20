const fs = require("node:fs")
const path = require("node:path")
const puppeteer = require("puppeteer")
let browser
const {
  difficultyToDirMap,
  extensions,
  sanitizeFolderName
} = require("./utils.js")
const maxRetries = 10000

const scrapKatas = async (katas) => {
  console.log("Starting the scraping process...")

  try {
    browser = await puppeteer.launch({
      headless: true,
      timeout: 10000
    })
  } catch (err) {
    console.log("Error during browser launch 💥", err)
    return // Exit if browser launch fails
  }

  console.log("Browser launched successfully.")
  const page = await browser.newPage()

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

    const emailInput = await page.$("#user_email")
    const passwordInput = await page.$("#user_password")

    console.log("Email:", process.env.CODEWARS_EMAIL ? "Set" : "Not Set")
    console.log("Password:", process.env.CODEWARS_PASSWORD ? "Set" : "Not Set")

    if (emailInput && passwordInput) {
      console.log("Found email and password input fields")

      console.log("Typing email")
      await emailInput.type(process.env.CODEWARS_EMAIL)
      console.log("Typed email")

      await page.waitForTimeout(1000)

      console.log("Typing password")
      await passwordInput.type(process.env.CODEWARS_PASSWORD)
      console.log("Typed password")
    } else {
      throw new Error("Could not find email or password input fields")
    }

    console.log("Submitting the sign-in form...")
    await page.click('button.is-red[type="submit"]')
  } catch (err) {
    console.log("Error during the login process 💥", err)
    await browser.close()
    return // Exit if login fails
  }

  let retryCount = 0
  let waitTime = 1000

  while (retryCount < maxRetries) {
    for (let index in katas) {
      try {
        const kata = katas[index]
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
            `${__dirname}/katas/${
              difficultyToDirMap[rank]
            }/${sanitizeFolderName(kata.slug)}`
          )
          const filePath = path.join(dirPath, `solution.${extension}`)

          // Ensure directory exists before writing
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true })
          }

          fs.writeFile(filePath, codeText, "utf-8", (err) => {
            if (err) console.log("Error writing file 💥", err)
            else console.log("File saved successfully", kata.slug, rank)
          })
        }
      } catch (error) {
        console.log(
          "Error processing kata 💥",
          error,
          `\n Retrying in ${waitTime}ms`
        )
        await new Promise((resolve) => setTimeout(resolve, waitTime))
        waitTime *= 2
        retryCount++
      }
    }

    break
  }

  console.log("Closing the browser...")
  await browser.close()
  console.log("Scraping process completed.")
}

module.exports = scrapKatas
