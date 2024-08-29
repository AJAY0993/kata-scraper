function suffixSums(a) {
  //coding and coding..
  const b = []
  const sum = a.reduce((curr,acc)=> curr + acc,0)
  let preceding = 0
  b.push(sum)
  for(let i = 0; i < a.length - 1; i++){
    preceding+= a[i]
    b.push(sum - preceding)
  }
  return b
}