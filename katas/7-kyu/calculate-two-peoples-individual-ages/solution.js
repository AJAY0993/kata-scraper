function getAges(sum,difference){
  let  a = (sum + difference) / 2
  let  b = sum - a
  
  if(a < 0 || b < 0 || sum < 0 || difference < 0){
    return null
  }
  return [a,b]
};