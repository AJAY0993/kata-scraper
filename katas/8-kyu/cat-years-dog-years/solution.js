var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catAge;
  let dogAge;
  
  if(humanYears==1){
    catAge =  15
  }
  else if(humanYears == 2){
    catAge =  15 + 9
  }
  else{
    catAge =  24 + ((humanYears-2)*4)
  }
  
 if(humanYears==1){
    dogAge =  15
  }
  else if(humanYears == 2){
    dogAge = 15 + 9
  }
  else{
    dogAge = 24 + ((humanYears-2)*5)
  }
  
  return [humanYears,catAge,dogAge];
}
