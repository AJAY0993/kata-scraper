function cubeOdd(arr) {

// insert code here >.<
let sum = 0;
console.log(arr)
const allInt = arr.every(x => {
  if(Number.isInteger(x)){
    if(x%2)sum += Math.pow(x,3);
    return true
  }return false
})
return allInt ? sum : undefined;
}