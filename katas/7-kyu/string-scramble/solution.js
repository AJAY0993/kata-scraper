function scramble(str, arr) {
  // do teh codes
  let returnValue = [...str]
  for(i=0; i<=arr.length; i++){
    returnValue[arr[i]] = str[i]
  }
  return returnValue.join('')
};