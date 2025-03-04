function upArray(arr){
  // ... 
  if(arr.length === 0 || arr.some(x=> x<0 || x>9 || typeof(x) !== 'number')){
    return null
  }
  let result = []
  let carry = 1
  for(i=arr.length - 1; i>= 0; i--){
    let sum = carry + arr[i];
    carry = Math.floor(sum/10);
    result.unshift(sum%10)
  }
  if(carry > 0){
    result.unshift(carry)
  }
  
  return result
}