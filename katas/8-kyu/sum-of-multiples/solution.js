function sumMul(n,m){
  let count = 1
  let sum = 0
while(n*count < m){
  sum+= n*count
  count++
}
  return sum || "INVALID"
  }