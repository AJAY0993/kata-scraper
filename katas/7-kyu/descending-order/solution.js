function descendingOrder(n){
  //...
n = String(n)
let arr =   (n.split('')).map(x => Number(x))
arr.sort((a,b) => b-a)
return Number(arr.join(''))
  
}