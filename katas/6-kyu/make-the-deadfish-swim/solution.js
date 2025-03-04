function parse( data )
{ 
  const output = []
  let c = 0
  for(let s of data){
    if(s === 'i') c++
    else if (s === 'd') c--
    else if (s === 's') c*= c
    else if(s === 'o') output.push(c)
  }
  return output
}