function largest(n, array) {
  // Find the n highest elements in a list
  let arr = array.slice().sort((a,b)=> a-b)
  return arr.slice(arr.length-n);
}