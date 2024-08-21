function mergeArrays(a, b) {
  // your code here
  return [...new Set([ ...new Set(a),...new Set(b)  ])].sort((a,b)=> a-b )
}
