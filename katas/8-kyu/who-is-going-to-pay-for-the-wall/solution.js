function whoIsPaying(name){
  //your code here
 let arr = []
name.length > 2 ? arr.push(name) && arr.push(name.substring(0,2)) : arr.push(name)
  return arr
}