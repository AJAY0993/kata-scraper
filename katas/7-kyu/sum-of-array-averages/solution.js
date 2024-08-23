const sumAverage = (arr) => {
  // Your code here
  let result = arr.map( e => {
   return e.reduce((t,a)=>t+a,0)/e.length
  }).reduce((x,y)=> x+y,0);
  return Math.floor(result)
}