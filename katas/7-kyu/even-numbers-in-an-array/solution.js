function evenNumbers(array, number) {
  // good luck
  return array.filter(value=> value%2 === 0 ).reverse().slice(0,number).reverse()
}