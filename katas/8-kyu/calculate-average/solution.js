function findAverage(array) {
  // your code here
  return array.length>0 ? array.reduce((acc,x)=>acc+x,0)/array.length : 0
}