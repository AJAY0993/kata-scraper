function findDup( arr ){
arr.sort((a,b)=>a-b)
  return arr.find((n,i)=> n === arr[i+1])
}