function solution(pairs){
  // TODO: complete
  let str = ''
  let c = 0;
  for(i in pairs){
    str+= `${i} = ${pairs[i]},`
  }
  return str.slice(0,-1)
}