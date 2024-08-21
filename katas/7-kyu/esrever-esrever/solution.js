function esrever( str ){
  // ...
  if(str === '')return ''
  return str.slice(0,str.length-1).split(' ').reverse().map(x => [...x].reverse().join('') ).join(' ') + str[str.length-1]
} 