const fs = require("node:fs")
const path = require("node:path")
const redis = require("./redis")

const {
  difficultyToDirMap,
  sanitizeFolderName,
  createDirectory,
  deleteDirectory,
  readFile
} = require("./utils.js")
const scrapeKatasSolution = require("./pup.js")

const BASE_URL = `https://www.codewars.com/api/v1/users/${process.env.CODEWARS_USERNAME}/code-challenges/completed`
const KATA_DETAIL_URL = `https://www.codewars.com/api/v1/code-challenges/`
const maxRetries = 0
const concurrencyLimit = 4

const ranks = {}

async function main() {
  process.env.REDIS_URL
    ? console.log("REDIS URL FOUND")
    : console.log("REDIS URL NOT FOUND")
  try {
    await deleteDirectory("./katas")
    const katas = await fetchKatas()
    await fetchKataDetails(katas)
    console.log("All kata details fetched.")
    await scrapeKatasSolution(katas, ranks)

    const entries = await fs.promises.readdir("./katas", {
      encoding: "utf8",
      recursive: true,
      withFileTypes: true
    })
    for (const entry of entries) {
      if (entry.isFile()) {
        const filePath = path.join("./", entry.parentPath, entry.name)
        const body = await readFile(filePath)
        console.log(filePath)
        console.log("==================================================")
        console.log(filePath)
        console.log("-------------------------")
        console.log()
      }
    }
    redis.disconnect()
  } catch (err) {
    console.error(err)
    await fs.promises.writeFile(
      path.join(__dirname, "/error", `${Date.now().toString()}.md`),
      JSON.stringify(err)
    )
    process.exit(1)
  }
}

/**
 * @param {number} [page=0]
 */
async function fetch_CompletedKatas_Page(page = 0) {
  console.log("fetch_CompletedKatas_Page")
  const response = await fetch(`${BASE_URL}?page=${page}`)
  const response_body = await response.json()
  console.log()
  console.log(`Katas page ${page}`)
  console.log({ response_body })
  console.log()
  if (!response_body.data || !response_body.totalPages) {
    throw `No data: { data: ${response_body.data}, totalPages:${response_body.totalPages}, currentPage:0 }`
  }
  return response_body
}

/**
 * @param {number} [startPage=0]
 */
async function fetchKatas(startPage = 0) {
  console.log("fetchKatas")
  const response_body = await fetch_CompletedKatas_Page(startPage)
  const totalPages = response_body.totalPages
  const pagedata_array = [response_body.data]
  let katas = pagedata_array

  for (
    let currentPage = startPage + 1;
    currentPage < totalPages;
    currentPage++
  ) {
    const { data } = await fetch_CompletedKatas_Page(currentPage)
    if (!data || !totalPages) {
      throw `Couldn't fetch katas. { data: ${data}, currentPage:${currentPage} }`
    }
    katas.push(data)
  }

  katas = katas.flat()
  const filepath = "./katas/katas.json"
  await createDirectory(filepath, true)
  await fs.promises.writeFile(filepath, JSON.stringify(katas))
  return katas
}

/**
 * @param {{id:string}[]} katas
 */
async function fetchKataDetails(katas) {
  console.log("fetchKataDetails")
  /**
   * @param {string} id
   * @param {number} [retryCount=0]
   */
  async function fetchWithRetry(id, retryCount = 0) {
    console.log("fetchWithRetry", id)
    try {
      const response = await fetch(`${KATA_DETAIL_URL}${id}`)
      const response_body = await response.json()
      // @ts-ignore
      ranks[response_body.id] = response_body.rank.name
      const rankdir = difficultyToDirMap[response_body.rank.name]
      const filepath = `./katas/${rankdir}/${sanitizeFolderName(
        response_body.slug
      )}/README.md`

      await createDirectory(filepath, true)
      await fs.promises.writeFile(filepath, response_body.description)
    } catch (err) {
      // retry logic deleted
      console.error(err)
    }
  }
  /**
   * @param {{id:string}[]} batch
   */

  async function fetchInBatches(batch) {
    console.log("\n ----- fetching in batches ---- ")
    // await Promise.all(batch.map((kata) => fetchWithRetry(kata.id)))
    for (const { id } of batch) {
      await fetchWithRetry(id)
    }
  }

  for (let i = 0; i < katas.length; i += concurrencyLimit) {
    await fetchInBatches(katas.slice(i, i + concurrencyLimit))
  }
}

redis.on("connect", main)
