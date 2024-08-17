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

function sanitizeFolderName(name) {
  // Define a regex pattern to match invalid characters
  const invalidChars = /[<>:"/\\|?*]+/g

  // Replace invalid characters with an underscore
  return name.replace(invalidChars, "_")
}

module.exports = { extensions, difficultyToDirMap, sanitizeFolderName }
