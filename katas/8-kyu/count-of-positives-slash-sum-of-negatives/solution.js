function countPositivesSumNegatives(input) {
  // your code here
  if( input === null  || input.length === 0  ){
    return []
  }
  else {
    let countOfPositive = 0
    let sumOfNegative  = 0
    
    for (i=0; i< input.length; i++){
      if(input[i]>0)
        {countOfPositive += 1}
      else if(input[i]<0){ sumOfNegative += input[i]}
    }
  return [countOfPositive, sumOfNegative]
    
  }
  
}