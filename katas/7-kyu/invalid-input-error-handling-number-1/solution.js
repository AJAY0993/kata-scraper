function getCount(words) {
const obj =  {vowels:0,consonants:0}
if(!words || !words.toLowerCase)return obj
const vowels = 'aeiou'
const consonants = 'bcdfghjklmnpqrstvwxyz'
console.log(words)
words.toLowerCase().split('').forEach(x => {
  if(vowels.includes(x)){
  obj.vowels = obj.vowels + 1
}
else if(consonants.includes(x)){
  obj.consonants = obj.consonants + 1
}
  })
  return obj
}