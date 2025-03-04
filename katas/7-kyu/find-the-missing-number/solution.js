function missingNo(nums) {
  const sum = 101/2*(100)
  const actualSum = nums.reduce((n,acc)=> n + acc,0)
  return sum - actualSum
}