var number=function(array){
  //your awesome code here
  return !array ? [] : array.map( (x,i) => `${i+1}: ${x}` )
}