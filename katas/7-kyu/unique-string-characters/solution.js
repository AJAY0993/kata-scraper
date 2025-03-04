function solve(a,b){
 //..
  let res = ''
  const maxL = Math.max(a.length, b.length)
  for (let i = 0; i < maxL; i++){
    if(a[i] && !b.includes(a[i])){
      res+= a[i]
    }
  }
   for (let i = 0; i < maxL; i++){
    if(b[i] && !a.includes(b[i])){
      res+= b[i]
    }
  }
  return res
};