function arraysSimilar(arr1, arr2) {
  // TODO: Implement your arraysSimilar
  if(arr1.length !== arr2.length) return false;
   arr1 = arr1.sort((a,b)=> a-b)
   arr2 = arr2.sort((a,b)=> a-b)
  return arr1.every((x,i) => x === arr2[i])
}