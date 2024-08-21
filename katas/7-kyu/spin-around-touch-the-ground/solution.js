function spinAround(turns) {
  // Here be dragons!
 let deg = turns.map(d=> d=='right'? 90 : -90).reduce((t,x)=> t+x,0)
deg = Math.abs(deg)

  return Math.floor(deg/360) 
  }