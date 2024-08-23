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
 * @param {string} problemID
 * @param {string} languageCode
 * @param {string} solutionData
 */

const storeSolution = async (problemID, languageCode, solutionData) => {
  const key = `${problemID}:${languageCode}`
  await redis.set(key, JSON.stringify(solutionData))
}

/**
 * @param {string} problemID
 * @param {string} languageCode
 */
const getSolution = async (problemID, languageCode) => {
  const key = `${problemID}:${languageCode}`
  const data = await redis.get(key)
  return data ? JSON.parse(data) : null
}

module.exports = {
  extensions,
  difficultyToDirMap,
  sanitizeFolderName,
  createDirectory,
  deleteDirectory,
  readFile,
  storeSolution,
  getSolution
}
