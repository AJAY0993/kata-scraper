var findAverage = function (nums) {
  // Code here
return nums.reduce((acc,x)=> acc+x,0)/nums.length
}