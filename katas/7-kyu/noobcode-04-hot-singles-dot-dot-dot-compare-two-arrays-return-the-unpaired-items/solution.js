function hotSingles(arr1, arr2) {
//WRITE YOUR CODE HERE!! GOOD LUCK
const array1 = arr1.filter(x=> !arr2.includes(x))
const array2 = arr2.filter(x=> !arr1.includes(x))
return [ ... new Set(array1.concat(array2) ) ]
}