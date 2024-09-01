function egged(year,span) { 
//Your code goes here.
if(year === 0) return 'No chickens yet!'
let b = 300
let t = 0
for(i = 0; i < span && i < year; i++){
    t+= b*3
    b = Math.floor(b * .8)
}
  return t
}
