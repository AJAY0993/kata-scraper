function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc,x) => acc+x, 0); //something went wrong
}