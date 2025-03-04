function distancesFromAverage(arr){
  //your code here
  let avg = arr.reduce((acc,i)=> acc + i,0)/arr.length
  return arr.map(x => Math.round((avg - x) * 100)/100 )
}