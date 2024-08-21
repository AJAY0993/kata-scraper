function squareDigits(num){
  let n = [...String(num)].reduce((acc,x)=>{
    x = +x *+x
    acc+= x
    return acc
  },'')
  return +n
}