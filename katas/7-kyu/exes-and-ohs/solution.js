function XO(str) {
    //code here
  let x = str.split('').filter(x=> x.toLowerCase() == 'x')
  let o = str.split('').filter(x=> x.toLowerCase() == 'o')
  
  return x.length === o.length ? true : false
}