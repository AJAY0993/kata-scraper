function mergeArrays(arr1, arr2) {
   let arr = arr1.concat(arr2)
    return [...new Set(arr.sort((a,b) => a - b))]
}