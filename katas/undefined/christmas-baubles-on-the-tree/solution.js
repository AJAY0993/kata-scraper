function baublesOnTree(baubles, branches){
  // your solution
  if (branches === 0) return "Grandma, we will have to buy a Christmas tree first!"
  let output = [];
  for(i=0;i<branches;i++){output[i] = 0}
  while(baubles > 0){
  for(i=0;i<branches;i++){
    if(baubles > 0 )output[i]++
    baubles--
  }
}
  return output 
}