var seqlist = function(first,c,l){
// Thou shalt begin !
  let arr = []
  for(let i=0; i<l; i++){
    if(i === 0){
      arr.push(first)
      }
    else{
    arr.push(arr[i-1] + c)  
      }
  }
  return arr
}