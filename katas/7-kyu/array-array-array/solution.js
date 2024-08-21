function explode(x){
  let count = 0
  let arr = []
 if(typeof(x[0]) === 'number' && typeof x[1] === 'number'){
  let sum = x[0] + x[1]
  while(count < sum){
    arr.push(x)
    count++
  }
   return arr
}
  if(typeof(x[0]) === 'number'){
     let sum = x[0]
  while(count < sum){
    arr.push(x)
    count++
  }
    return arr
  }
  if(typeof(x[1]) === 'number'){
     let sum = x[1]
  while(count < sum){
    arr.push(x)
    count++
  }
    return arr
  }
  else{
    return "Void!"
  }
}