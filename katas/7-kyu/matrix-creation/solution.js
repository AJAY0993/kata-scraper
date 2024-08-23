function getMatrix(number) {
  // good luck
  return Array.from({length:number},((x,i)=>{
    return Array.from({length:number},(z,j) => j===i?1:0 )
  }))
} 