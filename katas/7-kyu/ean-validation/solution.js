function validateEAN(eanCode) {
  //Your code
  let arr = [...eanCode.toString()]
  const validator = arr.pop()
  const sum = arr.reduce((acc,x,i)=> i%2 ? acc + +x*3 : +x + acc ,0)
  const checkSum = sum%10 ? 10 - (sum%10) : 0;
  return checkSum === +validator
}