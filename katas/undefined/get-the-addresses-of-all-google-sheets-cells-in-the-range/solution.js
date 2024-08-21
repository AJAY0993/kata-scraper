function getCellAddresses(range) {
  // ... //
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  range = range.split(':') 
  let [initialLetter, initialNum] = [range[0][0] , +range[0].slice(1)];
  let [finalLetter, finalNum] = [range[1][0] , +range[1].slice(1)];
  let s = initialNum;
  let i = letters.indexOf(initialLetter);
  let I = i;
  let j = letters.indexOf(finalLetter);
  let J = j;
  if( i > j || i==j &&  initialNum == finalNum)  return []
  console.log(initialLetter, initialNum, finalLetter, finalNum);
  let vertical = finalNum - initialNum + 1
  let horizontal = j - i + 1
  let l = vertical *horizontal
  return Array.from({length:l},(x,index)=>{
    if(s>finalNum)s = initialNum;
    if(I>j){ I = i
           s++}
    return `${letters[I++]}` + s
  }
  )
}