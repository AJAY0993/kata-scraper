function nearestSq(n){
    // your code
  let min = Math.floor(Math.sqrt(n))**2
  let max = Math.ceil(Math.sqrt(n))**2
  
  if(max-n < n-min){
    return max
  }
  else{
    return min
  }
}
