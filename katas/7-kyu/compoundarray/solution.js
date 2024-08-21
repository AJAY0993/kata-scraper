function compoundArray(a, b) {
  // Your code here
  let l = a.length > b.length ? a.length : b.length
  let arr = []
  for(i=0; i<l; i++ ){
   if(a[i] || a[i] === 0)arr.push(a[i]);
   if(b[i] || b[i] === 0)arr.push(b[i]);
  }
  return arr
}