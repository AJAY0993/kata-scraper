function isPrime(n){
  if(n<2) return false
  for(i=2; i<=Math.sqrt(n); i++){
    if(n%i==0) return false
  }
  return true
}
function numPrimorial(n){
  //your code here
  if(n>0){
  let arr = []
  let initial = 0
  while(arr.length < n){
    if( isPrime(++initial) ) arr.push(initial)
  }
  return arr.reduce((fact,x)=> fact*x,1)
}
}