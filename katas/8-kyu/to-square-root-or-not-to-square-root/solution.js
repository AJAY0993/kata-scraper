function squareOrSquareRoot(array) {
  return array.map(x=>Number.isInteger(Math.sqrt(x))?Math.sqrt(x):x**2);  
}