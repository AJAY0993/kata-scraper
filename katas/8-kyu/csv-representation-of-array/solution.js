function toCsvText(array) {
   // good luck
  array = array.map(x=> x.toString())
  return array.join('\n')
}