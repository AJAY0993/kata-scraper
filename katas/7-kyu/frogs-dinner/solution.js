//Return the string in the description with the number of flies eaten for each frog.
function summation(n){
 let sum = 0 
 for(let i=1; i<=n; i++){
   sum+= i
 }
  return sum
}
function frogContest(n) {
  //Code here
  const chris = summation(n)
  const tom  = summation(Math.floor(chris/2))
  const cat = summation((chris+tom))
  return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`
}