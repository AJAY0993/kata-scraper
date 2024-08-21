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

const maxRetries = 100 // Maximum number of retry attempts for scraping kata solutions

const scrapKatasSolution = async (katas) => {
  console.log("Starting the scraping process...")

  try {
    // Launch a new browser instance
    browser = await puppeteer.launch({
      headless: true, // Run browser in headless mode
      timeout: 10000 // Set a timeout for the browser launch
    })
  } catch (err) {
    console.log("Error during browser launch 💥", err)
    return // Exit if browser launch fails
  }

  console.log("Browser launched successfully.")
  const page = await browser.newPage() // Open a new page in the browser

  // Event handlers for browser logs, errors, and failed requests
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

  // Set up screen recording
  const recorder = new PuppeteerScreenRecorder(page)
  await recorder.start("./recording.mp4") // Start recording

  try {
    console.log("Navigating to Codewars sign-in page...")
    // Navigate to Codewars sign-in page and wait until the network is idle
    await page.goto("https://www.codewars.com/users/sign_in", {
      waitUntil: "networkidle2"
    })

    console.log("Setting viewport size...")
    await page.setViewport({ width: 1080, height: 1024 }) // Set viewport size for the page

    console.log("Waiting for email and password input fields...")
    // Wait for the email and password input fields to be visible
    await page.waitForSelector("#user_email", { visible: true, timeout: 60000 })
    await page.waitForSelector("#user_password", {
      visible: true,
      timeout: 60000
    })

    console.log("Email:", process.env.CODEWARS_EMAIL ? "Set" : "Not Set")
    console.log("Password:", process.env.CODEWARS_PASSWORD ? "Set" : "Not Set")

    console.log("Typing email")
    await page.type("#user_email", process.env.CODEWARS_EMAIL) // Type in the email address
    console.log("Typed email")

    await page.screenshot({ path: "example-screenshot.png" }) // Take a screenshot

    console.log("Typing password")
    await page.type("#user_password", process.env.CODEWARS_PASSWORD) // Type in the password
    console.log("Typed password")

    console.log("Submitting the sign-in form...")
    await page.click('button.is-red[type="submit"]') // Submit the sign-in form
  } catch (err) {
    console.log("Error during the login process 💥", err)
    await browser.close() // Close the browser if login fails
    return // Exit if login fails
  }

  // Function to scrape kata solutions with retry logic
  async function scrapWithRetry(kata, retryCount = 0) {
    try {
      const language = kata["completedLanguages"][0] // Get the language of the kata
      const extension = extensions[language] // Get the file extension for the language

      console.log("Navigating to kata solution page...")
      // Navigate to the kata solution page
      await page.goto(
        `https://www.codewars.com/kata/${kata.id}/solutions/${language}/me/newest`,
        {
          waitUntil: "networkidle2"
        }
      )

      // Extract the rank of the kata
      const rank = await page.evaluate(() => {
        const rankElement = document.querySelector(".is-white-rank")
        if (rankElement) {
          return rankElement.textContent
        }
        return null
      })

      if (rank) {
        // Extract the code text from the solution
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
          return "//null" // Return "//null" if no code is found
        })

        // Determine directory and file paths
        const dirPath = path.join(
          `${__dirname}/katas/${difficultyToDirMap[rank]}/${sanitizeFolderName(
            kata.slug
          )}`
        )
        const filePath = path.join(dirPath, `solution.${extension}`)

        // Ensure the directory exists before writing the file
        if (!fs.existsSync(dirPath)) {
          await fs.promises.mkdir(dirPath, { recursive: true })
        }

        // Write the code text to the file
        await fs.promises.writeFile(filePath, codeText, "utf-8")
      }
    } catch (error) {
      // Handle rate limit errors with retry logic
      const isRateLimitError =
        error.message.includes("429") || error.message.includes("rate limit")

      if (isRateLimitError && retryCount < maxRetries) {
        const waitTime = Math.pow(2, retryCount) * 1000 // Exponential backoff
        console.error(`Error fetching kata ${kata.id}:`, error.message)
        console.log(`Retrying in ${waitTime}ms...`)
        await new Promise((resolve) => setTimeout(resolve, waitTime))
        await scrapWithRetry(kata, retryCount + 1) // Retry fetching the kata solution
      } else {
        console.error(`Max retries reached for kata ${kata.id}:`, error.message)
        throw error // Rethrow the error if max retries are reached
      }
    }
  }

  // Iterate over all katas and scrape their solutions
  for (let i = 0; i < katas.length; i++) {
    await scrapWithRetry(katas[i])
  }

  await recorder.stop() // Stop recording

  console.log("Closing the browser...")
  await browser.close() // Close the browser
  console.log("Scraping process completed.")
}

module.exports = scrapKatasSolution // Export the scraping function
