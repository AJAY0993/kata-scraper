const fs = require("node:fs/promises")
const path = require("node:path")
const axios = require("axios")
const { difficultyToDirMap } = require("./utils.js")
const scrapKatas = require("./pup.js")

const BASE_URL = `https://www.codewars.com/api/v1/users/${process.env.CODEWARS_USERNAME}/code-challenges/completed`
const KATA_DETAIL_URL = `https://www.codewars.com/api/v1/code-challenges/`
let page = 0
let totalPages
let katas = []
const maxRetries = 100
const concurrencyLimit = 5

async function main() {
  try {
    await fetchKatas()
    await fetchKataDetails()
    console.log("All kata details fetched.")
    console.log("Starting scraping solutions")
    await scrapKatas(katas)
  } catch (error) {
    console.log(error)
    fs.writeFileSync(
      path.join(__dirname, "/error", `${Date.now().toString()}.md`),
      JSON.stringify(error)
    )
    process.exit(1)
  }
}

const fetchKatas = async (params) => {
  try {
    const res = await axios(`${BASE_URL}?page=${page}`)
    totalPages = res.data.totalPages
    katas = res.data.data
    console.log(`Katas page 0 done`)
    page++

    while (page < totalPages) {
      const res = await axios(`${BASE_URL}?page=${page}`)
      katas = katas.concat(res.data.data)
      console.log(`Katas page ${page} done`)
      page++
    }

    await fs.writeFile("katas/katas.json", JSON.stringify(katas), (err) => {
      if (err) console.log(err)
      else console.log("Katas fetched")
    })
  } catch (error) {
    throw error
  }
}

const fetchKataDetails = async () => {
  const fetchWithRetry = async (kata, retryCount = 0) => {
    try {
      const response = await axios.get(`${KATA_DETAIL_URL}${kata.id}`)
      const data = response.data
      const { slug, description } = data
      const dirName = difficultyToDirMap[data.rank.name]

      await fs.mkdir(path.join(__dirname, `katas/${dirName}/${slug}`), {
        recursive: true
      })

      await fs.writeFile(
        path.join(__dirname, `katas/${dirName}/${slug}/README.md`),
        description
      )
    } catch (error) {
      if (retryCount < maxRetries) {
        const waitTime = Math.pow(2, retryCount) * 1000
        console.error(`Error fetching kata ${kata.id}:`, error.message)
        console.log(`Retrying in ${waitTime}ms...`)
        await new Promise((resolve) => setTimeout(resolve, waitTime))
        await fetchWithRetry(kata, retryCount + 1)
      } else {
        console.error(`Max retries reached for kata ${kata.id}:`, error.message)
        throw error
      }
    }
  }

  const fetchInBatches = async (katasBatch) => {
    return Promise.all(katasBatch.map((kata) => fetchWithRetry(kata)))
  }

  for (let i = 0; i < katas.length; i += concurrencyLimit) {
    const katasBatch = katas.slice(i, i + concurrencyLimit)
    await fetchInBatches(katasBatch)
  }
}

main()
