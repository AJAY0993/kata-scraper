const reverseSeq = n => {
  const arr = []
  for(i=1; i<=n; i++){
    arr.push(i)
  }
  return arr.sort((a,b)=> b-a)
};