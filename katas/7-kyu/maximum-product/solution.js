function adjacentElementsProduct(array) {
  // max product
  let max = -Number.MAX_SAFE_INTEGER
  for(i=0;i<array.length-1;i++){
   max = Math.max(max,array[i]*array[i+1])
  }
  return max
}