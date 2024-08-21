function noBoringZeros(num) {
  // your code
  let n = String(num)
  
while( n.endsWith('0') ){
  n = n.slice(0,-1)
}
  return +n
  }