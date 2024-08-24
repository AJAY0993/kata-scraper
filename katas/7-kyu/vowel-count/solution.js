function getCount(str) {
  let vowels =0
 str.split('').forEach( x=> {
   x = x.toLowerCase()
   if(x === 'a' ||  x ==='e' || x === 'i'|| x==='o' || x==='u' ){
   vowels++
 } })
 return vowels
 }