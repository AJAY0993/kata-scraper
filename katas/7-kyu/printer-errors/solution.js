function printerError(s) {
    // your code
  let err =  s.split('').map( x=> x.charCodeAt(0)).filter(x => x>109)
  
  return `${(err.length || 0)}/${s.length}`
}