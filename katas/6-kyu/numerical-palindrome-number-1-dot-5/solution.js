function palindrome(n,s) { 
  //Code goes here 
  if(!Number.isInteger(n) || !Number.isInteger(s) || n<0 || s<0) return "Not valid"
  const arr = []
  while(arr.length < s){
    
    if( String(n) === [...String(n)].reverse().join('') && n > 10 ){
    arr.push(n)
      n++
   }
else{
  n++
}
  }
  return arr
}