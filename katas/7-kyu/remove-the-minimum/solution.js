function removeSmallest(numbers) {
  let arr = [...numbers]
  let i =  arr.indexOf(arr.find( x=> x=== Math.min(...arr)))
 arr.splice(i,1)
  return arr
}