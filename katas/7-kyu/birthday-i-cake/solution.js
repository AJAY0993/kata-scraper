function cake(num,y){
  let c = 0
  console.log(num,y)
 y.split('').forEach((x,i) => {
  if(i%2)c+= x.charCodeAt() - 96
   if(i%2===0)c+= x.charCodeAt(0)
})
  return c > (num/100)*70 ? "Fire!" : "That was close!"
}