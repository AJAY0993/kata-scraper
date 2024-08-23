function queueTime(customers, n) {
  //TODO
  if(n===1){
    return customers.reduce((acc,x)=> acc + x,0)
  }
  
  let counters = Array(n).fill(0)
  
  for(i of customers){
    counters[0]+= i;
    counters.sort((a,b)=> a - b)
  }
  
  return Math.max(...counters)
  
}