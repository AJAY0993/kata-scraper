function listToArray(list) {
  let arr = []
  //write your code here
 let condition = true
  while(list !== null){
    arr.push(list.value)
    list = list.next
  }
  return arr
}