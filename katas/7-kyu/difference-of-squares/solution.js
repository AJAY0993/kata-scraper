function differenceOfSquares(n) {
  // ...
  const sum = (n/2)*(1+n)
  const sumSquare = sum**2
  let squareSum = 0
  for(let i = 1; i <= n ; i++){
    squareSum+= i*i
  }
  return sumSquare - squareSum
}