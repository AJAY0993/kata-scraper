function pendulum(values) {
  values.sort((a,b)=>a-b)
  return values.reduce((output,x,i)=>{ i%2 ? output.push(x) : output.unshift(x)
                                     return output},[])
}