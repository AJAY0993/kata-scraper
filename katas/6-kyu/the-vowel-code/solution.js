  const vowels = {
    'a':1,
    'e':2,
    'i':3,
    'o':4,
    'u':5
  }
  
  const nums = {
    '1':'a',
    '2':'e',
    '3':'i',
    '4':'o',
    '5':'u'
}
  
function encode(string) {
  return string.split('').map((c) => {
    if(c in vowels){
      return vowels[c]
    }
    return c
  }).join('')
}

function decode(string) {
  return string.split('').map((c) => {
    if(+c){
      return nums[c]
    }
    return c
  }).join('')
}