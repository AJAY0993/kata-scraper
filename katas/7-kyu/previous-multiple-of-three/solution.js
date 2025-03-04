const prevMultOfThree = n => {
  //your solution
  if(n%3 === 0) return n
  let s = n + ''
  while(s){
    if(s%3 === 0) return +s
    s = s.slice(0,s.length - 1)
  }
  return null
}