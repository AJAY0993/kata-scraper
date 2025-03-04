function squareSum(numbers){
  return numbers.reduce((t,x)=> t+x**2, 0)
}