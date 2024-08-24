function array(string) {
  // TODO
    let arr =  string.split(',')
 if(string == '' || arr.length < 3){
  return null
}
  else { 
let slicedArr =  arr.slice(1,-1)
       return slicedArr.join(' ')}
}