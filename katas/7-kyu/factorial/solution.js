function factorial(n)
{
  // Calculate the factorial here
  if(n<0 || n>12){throw new RangeError('n doesnt lie between 0 -12')}
  if(n===1 || n===0){return 1}
  else{
  return  n*factorial(n-1)
  }
}