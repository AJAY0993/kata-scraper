function persistence(num) {
   //code me
  let ct = 0
  while(num>9){
  num = String(num).split('').reduce((t,x)=> t*x,1 )
    ct++
    }
  return ct
}
