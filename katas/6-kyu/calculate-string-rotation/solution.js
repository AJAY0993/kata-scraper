function shiftedDiff(first,second){
  // ...
  if(first.length !== second.length) {
   return -1
  }
  for(let i = 0; i<first.length; i++){
    const shiftedString = first.slice(-i) + first.slice(0,-i) 
    if(shiftedString === second ) {return i}
  }
  return -1  
}

