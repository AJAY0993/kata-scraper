const fs = require("node:fs")
const path = require("node:path")
const puppeteer = require("puppeteer")
const {
  difficultyToDirMap,
  extensions,
  sanitizeFolderName
} = require("./utils.js")
const maxRetries = 10000

const scrapKatas = async (katas) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Navigate to the page
  await page.goto("https://www.codewars.com/users/sign_in", {
    waitUntil: "networkidle2"
  })
  await page.setViewport({ width: 1080, height: 1024 })

  // Fill in email and password
  await page.type("#user_email", process.env.CODEWARS_EMAIL)
  await page.type("#user_password", process.env.CODEWARS_PASSWORD)

  // Click the submit button
  await page.click("#new_user button[type=submit]")

  await page.waitForNavigation({ waitUntil: "networkidle2" })
  let retryCount = 0
  let waitTime = 1000

  while (retryCount < maxRetries) {
    for (let index in katas) {
      try {
        const kata = katas[index]
        const language = kata["completedLanguages"][0]
        const extension = extensions[language]
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
