function missingWord(nums, str) {
  // Jenny needs your help...
  str = str.replaceAll(' ','')
  let output =  nums.sort((a,b)=> a-b).reduce((code,n)=> code+= str[n],'' ).toLowerCase()
  return output.includes('undefined') ? "No mission today" : output
}