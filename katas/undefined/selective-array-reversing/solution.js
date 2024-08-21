function selReverse(array, length) {
  // TODO
    if(length == 0){
      return array
    }
 let arr = [ ]
  let count = 0
  while(count <= array.length){
      array.slice(count,count + length).reverse().forEach(x=>arr.push(x))
      count+= length
    }
  return arr
}