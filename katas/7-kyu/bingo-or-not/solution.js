function bingo(a) {
  // your winning code here
  const m = {
    2:1,
    9:1,
    7:1,
    14:1,
    15:1
  }
  
  for(let i of a){
    if(m[i]) m[i]--
  }
  
  return Object.values(m).every(x => x < 1) ? 'WIN' : 'LOSE'
  
}