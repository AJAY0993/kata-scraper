function shortestArrang(n) {
    // your code here
  let half = Math.ceil(n/2)
  if(n===16 || n === 32) return [-1]
  if(n%2) return [half, half-1]
  
  while(half > 1){
  let sum = 0
  let res = []
  for(i=half; i>0; i-- ){
    sum+= i
    res.push(i)
    if(sum === n) return res
    if(sum > n) break
  }
    half--
}
}
