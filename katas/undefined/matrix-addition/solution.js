function matrixAddition(a, b){
  //TODO
  let inc = a[0].length
  a = a.flat()
  b = b.flat()
  let arr =  a.map((x,i)=> x + b[i]);
  let output = []
  for(i=0 ; i<arr.length; i+=inc){
    output.push([...arr.slice(i,i+inc)])
  }
  return output
}