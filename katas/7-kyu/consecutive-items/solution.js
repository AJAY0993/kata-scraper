function consecutive(arr, a, b) {
  // Your code here...
  for(i=0; i<arr.length; i++){
    if(arr[i]===a && (arr[i-1] === b || arr[i+1] === b) )return true
  }
  return false
}