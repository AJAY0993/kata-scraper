function atomicNumber(num){
  //"What are we doing today, Brain?" "The same thing we did last week, Pinky... Take over the CodeWars"
  let n = 0
  let c = 1
  let electrons  = num
  const arr = []
  
  while(electrons > 0){
    const e = 2*((c)**2)
     n+= e
     arr.push(n < num ? e : num - (n - e))
     c++
    electrons -= e
  }
  return arr
}