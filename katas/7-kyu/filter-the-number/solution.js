var filterString = function(value) {
  //Complete this function :)
  let arr = value.split('')
  
  return Number(   (    arr.map((x) => {
    if(Number(x)){
       return x
       } 
  else if(x === '0' )
  {
    return Number(x)
  }} )       
                   ).join(''))
}