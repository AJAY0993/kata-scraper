function uniteUnique(...rest) {
  //your code here
  return [...new Set(rest.flat())]
}
