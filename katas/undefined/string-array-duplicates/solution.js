function dup(S) {
//..
  return S.map(s => { 
    let arr = [...s]
    return arr.filter((x,i)=> x !== arr[i-1]).join('')          
})
};