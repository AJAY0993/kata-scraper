function arr2bin(arr){
  // show me the code
  
  let s = arr.reduce((acc,x)=>{
     typeof(x)=='number'? acc+= x : acc+= 0  
     return acc
  },0)
  return s.toString(2)
}