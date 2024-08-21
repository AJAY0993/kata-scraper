function disemvowel(str) {
  let vowels = 'aeiou'
  return str.split('').filter(x => !vowels.includes(x.toLowerCase())).join('')
}