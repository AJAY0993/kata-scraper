function digitize(n) {
  //code here
  let arr = (String(n)).split('')
  numberArr = arr.map( x=> Number(x))
  return numberArr.reverse()
}