function checkThreeAndTwo(a) {
  //your code here
  let arr = a.map(x=>x.toLowerCase()).sort().join('')
  if(  arr == 'aaabb' || arr == 'aaacc' || arr == 'aabbb' || arr == 'bbbcc' || arr == 'aaccc' || arr == 'bbccc')return true
  return false
}