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
  console.log("It failed on line 14")
  try {
    browser = await puppeteer.launch({
      headless: true,
      timeout: 10000
    })
  } catch (err) {
    console.log("Error 💥", err)
  }

  console.log("It failed on line 24")
  const page = await browser.newPage()

  // Navigate to the page
  console.log("It failed on line 28")
  await page.goto("https://www.codewars.com/users/sign_in", {
    waitUntil: "networkidle2"
  })

  console.log("It failed on line 33")
  await page.setViewport({ width: 1080, height: 1024 })

  await page.waitForSelector("#user_email", { visible: true })
  await page.waitForSelector("#user_password", { visible: true })

  const emailInput = await page.$("#user_email")
  const passwordInput = await page.$("#user_password")

  if (emailInput && passwordInput) {
    console.log("Found email and password input fields")
    await emailInput.type(process.env.CODEWARS_EMAIL)
    await passwordInput.type(process.env.CODEWARS_PASSWORD)
  } else {
    console.log("Could not find email or password input fields")
  }

  console.log("Email:", process.env.CODEWARS_EMAIL ? "Set" : "Not Set")
  console.log("Password:", process.env.CODEWARS_PASSWORD ? "Set" : "Not Set")

  await emailInput.type(process.env.CODEWARS_EMAIL)
  await passwordInput.type(process.env.CODEWARS_PASSWORD)

  console.log("It failed on line 37")
  await page.type("#user_email", process.env.CODEWARS_EMAIL)

  console.log("It failed on line 39")
  await page.type("#user_password", process.env.CODEWARS_PASSWORD)

  // Click the submit button
  console.log("It failed on line 43")
  await page.click("#new_user button[type=submit]")

  console.log("It failed on line 46")
  await page.waitForNavigation({ waitUntil: "networkidle2" })
  let retryCount = 0
  let waitTime = 1000

  while (retryCount < maxRetries) {
    console.log("In the loop")
    for (let index in katas) {
      try {
        const kata = katas[index]
        const language = kata["completedLanguages"][0]
        const extension = extensions[language]

        console.log("It failed on line 49")

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
            // Locate the element with ID 'solutions_list'
            const solutionsList = document.getElementById("solutions_list")
            if (solutionsList) {
              // Find the first <div> inside 'solutions_list'
              const solutionItem = solutionsList.querySelector("div")
              if (solutionItem) {
                // Extract text from <pre> inside the <div>
                const preTag = solutionItem.querySelector("pre")
                if (preTag) {
                  return preTag.textContent
                }
              }
            }
            return "//null"
          })

          fs.writeFile(
            path.join(
              `${__dirname}/katas/${
                difficultyToDirMap[rank]
              }/${sanitizeFolderName(kata.slug)}/solution.${extension}`
            ),
            codeText,
            "utf-8",
            (err) => {
              if (err) console.log(err)
              else console.log("success")
            }
          )
          console.log("File done", kata.slug, rank)
        }
      } catch (error) {
        console.log(error, `\n Retrying in ${waitTime}`)
        await new Promise((resolve) => setTimeout(resolve, waitTime))
        waitTime *= 2
      }
    }

    break
  } // Close the browser
  await browser.close()
}

module.exports = scrapKatas
