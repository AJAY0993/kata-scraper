function findLongest(array){
  // code here
let arr = array.map(digit => String(digit).length)
let max = Math.max(...arr)
let i = arr.indexOf(max)
return array[i]
}