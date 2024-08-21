var number = function(busStops){
  // Good Luck!
  let enter = 0 
  let exit = 0
  busStops.forEach(x=> enter+= x[0]) - busStops.forEach(x=> exit+= x[1])
  
  return enter - exit
 
}