function oddOnesOut(nums) {
  // your code here
  let odd = {}
  nums.forEach(e=> odd[e] ? odd[e]++ : odd[e]=1)
  odd = Object.keys(odd).filter(e=> odd[e]%2 == 0).map(e=>+e)
  return nums.filter(e => odd.includes(e) )
}