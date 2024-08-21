var hotpo = function(n){
  let  count = 0
  let x = n
    if(n === 0){return 0} //Optional Handler to n = 0
    else{
    while (x!==1){
      if(x%2===0){
        x = x/2
      }
      else{
        x = x*3 +1
      }
      count++
    }
  }
    return count
}