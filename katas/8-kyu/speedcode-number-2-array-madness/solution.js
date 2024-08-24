function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return a.reduce((acc,x)=> x**2 + acc,0) > b.reduce((acc,x)=> x**3 + acc,0)
}