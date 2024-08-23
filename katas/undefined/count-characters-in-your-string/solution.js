function count(string) {
  // TODO
  const myObj ={}
  string.split('').forEach(x=> myObj[x] ? myObj[x]++: myObj[x] = 1 )
  return myObj
}