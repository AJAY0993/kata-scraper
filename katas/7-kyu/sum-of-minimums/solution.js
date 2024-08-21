function sumOfMinimums(arr) {
  // your code here
  
  return arr.map(x=> Math.min(...x)).reduce((t,x)=> t+x,0)
}