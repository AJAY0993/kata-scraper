function transposeTwoStrings (array) {
let s = ''
let l  =  Math.max(array[0].length, array[1].length)
for(i=0; i<l; i++){
  if(i === l - 1) s+= `${array[0][i]||' '} ${array[1][i]||' '}`;
  else{s+= `${array[0][i]||' '} ${array[1][i]||' '}\n`}
}
  return s
}