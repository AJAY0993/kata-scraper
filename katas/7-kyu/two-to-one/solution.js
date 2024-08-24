function longest(s1, s2) {
  // your code
  let str = s1.concat(s2)
  let arr = str.split('')
  let uniqueArr = [...new Set(arr)].sort()
  let newStr =  uniqueArr.join('')
  return newStr
  
}