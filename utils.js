const fs = require("node:fs")
const node_path = require("node:path")
const redis = require("./redis")
/**
 * @type {{ [key: string]: string }}
 */
const difficultyToDirMap = {
  "1 kyu": "1-kyu",
  "2 kyu": "2-kyu",
  "3 kyu": "3-kyu",
  "4 kyu": "4-kyu",
  "5 kyu": "5-kyu",
  "6 kyu": "6-kyu",
  "7 kyu": "7-kyu",
  "8 kyu": "8-kyu"
}

/**
 * @type {{ [key: string]: string }}
 */

const extensions = {
  agda: "agda",
  bf: "b",
  c: "c",
  cmlf: "cmfl",
  clojure: "clj",
  cobol: "cob",
  coffeescript: "coffee",
  commonlisp: "lisp",
  coq: "coq",
  cplusplus: "cpp",
  crystal: "cr",
  csharp: "cs",
  dart: "dart",
  elixir: "ex",
  elm: "elm",
  erlang: "erl",
  factor: "factor",
  forth: "fth",
  fortran: "f",
  fsharp: "fs",
  go: "go",
  groovy: "groovy",
  haskell: "hs",
  haxe: "hx",
  idris: "idr",
  java: "java",
  javascript: "js",
  julia: "jl",
  kotlin: "kt",
  lean: "lean",
  lua: "lua",
  nasm: "nasm",
  nimrod: "nim",
  objective: "m",
  ocaml: "ml",
  pascal: "pas",
  perl: "pl",
  php: "php",
  powershell: "ps1",
  prolog: "pro",
  purescript: "purs",
  python: "py",
  r: "r",
  racket: "rkt",
  ruby: "rb",
  rust: "rs",
  scala: "scala",
  shell: "sh",
  sql: "sql",
  swift: "swift",
  typescript: "ts",
  vb: "vb"
}

/**
 * @param {string} name
 */
function sanitizeFolderName(name) {
  // Define a regex pattern to match invalid characters
  const invalidChars = /[<>:"/\\|?*]+/g
  // Replace invalid characters with an underscore
  return name.replace(invalidChars, "_")
}

/**
 * @param {string} path
 * @param {boolean} [isFile=false]
 */
async function createDirectory(path, isFile = false) {
  if (isFile === true) {
    await fs.promises.mkdir(node_path.dirname(path), { recursive: true })
  } else {
    await fs.promises.mkdir(path, { recursive: true })
  }
}
/**
 * @param {string} path
 */
async function deleteDirectory(path) {
  await fs.promises.rm(path, { recursive: true, force: true })
}

/**
 * @param {string} path
 */
async function readFile(path) {
  return await fs.promises.readFile(path, { encoding: "utf8" })
}

/**
 * @param {any} page
 * @param {any} browser
 */
async function checkHeaderForButtons(page, browser) {
  const exist = await page.evaluate(() => {
    const header = document.querySelector("header.main.is-visible#main_header")
    
    const loginButtonExists = header.querySelector('a[href="/users/sign_in"]')
    const signUpButtonExists = header.querySelector('a[href="/join"]')

    if (loginButtonExists || signUpButtonExists) {
      return true
    }
    return false
  })
  if (exist) {
    console.log(
      "Could not login, closing the process. Please try again after some time"
    )
    await browser.close()
    process.exit(1)
  }
}

/**
 * @param {string} problemID
 * @param {string} languageCode
 * @param {string} solutionData
 */

const storeSolution = async (problemID, languageCode, solutionData) => {
  try {
    console.log()
    solutionData === "// codeblock not found"
      ? console.log("Solution not found so will not save in redis")
      : console.log("Storing solution in redis")
    console.log()
    if (solutionData !== "// codeblock not found") {
      const key = `${problemID}:${languageCode}`
      await redis.set(key, solutionData)
    }
  } catch (error) {
    console.log("Something went wrong while saving solution.")
  }
}

/**
 * @param {string} problemID
 * @param {string} languageCode
 */
const getSolution = async (problemID, languageCode) => {
  const key = `${problemID}:${languageCode}`
  const data = await redis.get(key)
  return data
}

module.exports = {
  extensions,
  difficultyToDirMap,
  sanitizeFolderName,
  createDirectory,
  deleteDirectory,
  readFile,
  checkHeaderForButtons,
  storeSolution,
  getSolution
}
