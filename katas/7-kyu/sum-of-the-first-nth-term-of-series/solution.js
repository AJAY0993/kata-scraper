function SeriesSum(n)
{ // Happy Coding ^_^
let denominator = 1;
  const arr = []

for (i=0;i<n;i++){
  arr.push(1/denominator)
  denominator += 3
}
  return arr.reduce((t,x)=> t+x,0).toFixed(2).toString()
}