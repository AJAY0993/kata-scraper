const fs = require("node:fs/promises")
const path = require("node:path")
const axios = require("axios")
const { difficultyToDirMap, sanitizeFolderName } = require("./utils.js")
const scrapKatasSolution = require("./pup.js")

const BASE_URL = `https://www.codewars.com/api/v1/users/${process.env.CODEWARS_USERNAME}/code-challenges/completed`
const KATA_DETAIL_URL = `https://www.codewars.com/api/v1/code-challenges/`

const maxRetries = 100 // Maximum number of retry attempts for fetching kata details
const concurrencyLimit = 5 // Number of concurrent requests for fetching kata details

let page = 0 // Current page for fetching katas
let totalPages // Total number of pages to fetch
let katas = [] // Array to store all fetched katas

async function main() {
  try {
    console.log("Starting kata fetch process...")
    await fetchKatas() // Fetch katas from the API
    console.log("Katas fetched successfully.")

    console.log("Starting kata details fetch process...")
    await fetchKataDetails() // Fetch details for each kata
    console.log("All kata details fetched.")

    console.log("Starting scraping solutions...")
    await scrapKatasSolution(katas) // Scrape solutions for the fetched katas
    console.log("Solutions scraped successfully.")
  } catch (error) {
    console.error("An error occurred:", error)
    // Write error details to a file
    await fs.writeFile(
      path.join(__dirname, "/error", `${Date.now().toString()}.md`),
      JSON.stringify(error)
    )
    process.exit(1) // Exit the process with an error code
  }
}

async function fetchKatas() {
  try {
    console.log(`Fetching katas from page ${page}...`)
    // Function to fetch katas from a specific page
    const fetchPage = async (page) => {
      const { data } = await axios(`${BASE_URL}?page=${page}`)
      return data
    }

    // Fetch the first page of katas
    let { totalPages: fetchedTotalPages, data } = await fetchPage(page)
    totalPages = fetchedTotalPages // Update total pages
    katas = data // Store katas from the first page
    console.log(
      `Fetched katas from page ${page}. Total katas retrieved: ${katas.length}`
    )
    page++

    // Fetch remaining pages of katas
    while (page < totalPages) {
      console.log(`Fetching katas from page ${page}...`)
      const { data: newKatas } = await fetchPage(page)
      katas = katas.concat(newKatas) // Append new katas to the existing list
      console.log(
        `Fetched katas from page ${page}. Total katas retrieved: ${katas.length}`
      )
      page++
    }

    console.log("Writing katas data to file...")
    // Write the fetched katas data to a JSON file
    await fs.writeFile("katas/katas.json", JSON.stringify(katas))
    console.log("Katas data written to file successfully.")
  } catch (error) {
    console.error("Error fetching katas:", error)
    throw error // Rethrow the error to be handled by the main function
  }
}

async function fetchKataDetails() {
  // Function to fetch kata details with retry logic
  const fetchWithRetry = async (kata, retryCount = 0) => {
    try {
      console.log(`Fetching details for kata ${kata.id}...`)
      // Fetch details for a single kata
      const { data } = await axios.get(`${KATA_DETAIL_URL}${kata.id}`)
      const { slug, description, rank } = data
      const dirName = difficultyToDirMap[rank.name]
      const dirPath = path.join(
        __dirname,
        `katas/${dirName}/${sanitizeFolderName(slug)}`
      )

      console.log(`Creating directory for kata ${kata.id}: ${dirPath}`)
      // Create a directory for the kata
      await fs.mkdir(dirPath, { recursive: true })

      console.log(`Writing description for kata ${kata.id} to README.md`)
      // Write the kata's description to a README.md file
      await fs.writeFile(path.join(dirPath, "README.md"), description)

      console.log(`Details for kata ${kata.id} fetched and saved successfully.`)
    } catch (error) {
      if (retryCount < maxRetries) {
        const waitTime = Math.pow(2, retryCount) * 1000 // Exponential backoff
        console.error(`Error fetching kata ${kata.id}: ${error.message}`)
        console.log(`Retrying in ${waitTime}ms...`)
        await new Promise((resolve) => setTimeout(resolve, waitTime))
        await fetchWithRetry(kata, retryCount + 1) // Retry fetching kata details
      } else {
        console.error(
          `Max retries reached for kata ${kata.id}: ${error.message}`
        )
        throw error // Rethrow the error if max retries are reached
      }
    }
  }

  // Function to fetch details for a batch of katas
  const fetchInBatches = async (katasBatch) => {
    console.log(`Fetching kata details in batch of ${katasBatch.length}...`)
    return Promise.all(katasBatch.map((kata) => fetchWithRetry(kata)))
  }

  // Process katas in batches
  for (let i = 0; i < katas.length; i += concurrencyLimit) {
    const katasBatch = katas.slice(i, i + concurrencyLimit)
    console.log(`Processing batch ${i / concurrencyLimit + 1} of katas.`)
    await fetchInBatches(katasBatch) // Fetch details for the current batch
  }
}

main() // Start the main process
