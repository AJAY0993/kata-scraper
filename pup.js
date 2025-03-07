const node_fs = require("node:fs")
const node_path = require("node:path")

const puppeteer = require("puppeteer")

let browser
const {
  difficultyToDirMap,
  extensions,
  sanitizeFolderName,
  createDirectory,
  getSolution,
  storeSolution,
  checkHeaderForButtons
} = require("./utils.js")
const maxRetries = 0
const concurrencyLimit = 1

async function scrapeKatasSolution(
  /** @type {string | any[]} */ katas,
  /** @type {{ [key: string]: string } | {}} */ ranks
) {
  console.log("scrapeKatasSolution")
  try {
     browser = await puppeteer.launch({
              args: ['--no-sandbox', '--disable-setuid-sandbox'],
              headless: process.env.NODE_ENV !== "development",
              timeout: 10000
            });
  } catch (err) {
    console.log("Error during browser launch 💥", err)
    return
  }
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
        request.failure()?.errorText ?? "request.failure()?.errorText is null"
      }`
    )
  })

  try {
    console.log()
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
    await page.type(
      "#user_email",
      process.env.CODEWARS_EMAIL ?? "CODEWARS_EMAIL is null"
    )
    console.log("Typed email")
    console.log("Typing password")
    await page.type(
      "#user_password",
      process.env.CODEWARS_PASSWORD ?? "CODEWARS_PASSWORD is null"
    )
    console.log("Typed password")

    console.log("Submitting the sign-in form...")
    await page.click('button.is-red[type="submit"]')
    console.log()
  } catch (err) {
    console.log("Error during the login process 💥", err)
    await browser.close()
    process.exit(1) // Exit if login fails
  }

  /**
   * @param {{ [x: string]: any[]; id: any; slug: any; }} kata
   */
  async function scrapeWithRetry(kata, retryCount = 0) {
    console.log("scrapeWithRetry")
    console.log()
    console.log({ kata })
    console.log()
    try {
      for (const language of kata["completedLanguages"]) {
        const extension = extensions[language]
        console.log("Navigating to kata solution page...")
        let solution = await getSolution(kata.id, extension)
        if (solution) console.log("Solution found in cache")
        else if (!solution) {
          await page.goto(
            `https://www.codewars.com/kata/${kata.id}/solutions/${language}/me/newest`,
            {
              waitUntil: "networkidle2"
            }
          )

          // @ts-ignore
          const rank = ranks[kata.id]

          solution = await page.evaluate(() => {
            const codeblocks = document.querySelectorAll(
              "#solutions_list div pre"
            )
            for (const codeblock of codeblocks) {
              if (codeblock.textContent) {
                return codeblock.textContent
              }
            }
            return "// codeblock not found"
          })

          await storeSolution(kata.id, extension, solution)
        }

        // @ts-ignore
        const rank = ranks[kata.id]
        const rankdir = difficultyToDirMap[rank]
        const filePath = `./katas/${rankdir}/${sanitizeFolderName(
          kata.slug
        )}/solution.${extension}`
        await createDirectory(filePath, true)
        await node_fs.promises.writeFile(filePath, solution, "utf-8")
      }
    } catch (err) {
      // retry logic deleted
      console.error(err)
    }
  }

  await new Promise((res) => setTimeout(res, 1000))

  await checkHeaderForButtons(page, browser)
  for (let i = 0; i < katas.length; i++) {
    await scrapeWithRetry(katas[i])
  }

  console.log("Closing the browser...")
  await browser.close()
  console.log("Scraping process completed.")
}

module.exports = scrapeKatasSolution
