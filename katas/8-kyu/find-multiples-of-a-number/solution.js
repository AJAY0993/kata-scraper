function findMultiples(integer, limit) {
  //your code here
  let result =[]
  let multipleOfTwo;
  for (i=integer; i<=limit; i++){
    if(i%integer ===0 )
      {
        multipleOfTwo = i
        result.push(multipleOfTwo)
      }
    
  }
  return  result
}
