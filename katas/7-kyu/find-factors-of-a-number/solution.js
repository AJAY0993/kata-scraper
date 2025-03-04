function factors(x){
if (!Number.isInteger(x) || x<1){return -1}
  const arr = []
for(i=1; i<=x; i++){
  if(x%i ===0){arr.push(i)}
}
  return arr.sort((a,b)=>b-a)
}