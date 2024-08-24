function smaller(nums) {
//code me
  return nums.map((x,i)=> nums.slice(i).filter(y=> y<x).length)
}