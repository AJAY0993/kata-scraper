function divisibleBy(numbers, divisor){
  let arr=[];
  numbers.forEach(x => {
    if(x%divisor ===0){
      arr.push(x)
    }
  })
  return arr
}