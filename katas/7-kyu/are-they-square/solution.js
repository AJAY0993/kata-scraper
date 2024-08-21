var isSquare = function(arr){
  //Your code here
  if(arr.length < 1)return undefined;
  return arr.every(x => Number.isInteger(Math.sqrt(x)))
}