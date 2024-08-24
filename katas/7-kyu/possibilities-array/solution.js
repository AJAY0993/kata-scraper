function isAllPossibilities(x){
  const arr = x.slice().sort((a,b)=> a - b)
  return arr.every((x,i)=> x === i)
}