function pipeFix(numbers){
  
  if(numbers.length<2){return numbers}
  let result = []
let min = numbers[0]
let max = numbers[numbers.length-1]


result.push(min)
  let i = min +1
  while(i < max){
    result.push(i)
    i++
  }
  
  result.push(max)
  
  return result
  

}