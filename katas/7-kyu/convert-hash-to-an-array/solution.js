function convertHashToArray(hash){
  //your code here - sort the keys!
  let arr = []
  for (i in hash){
    arr.push(i)
  }
 return arr.sort().map(x=> [x,hash[x]])
 
}