function isPowerOfTwo(num){
  //.. should return true or false ..
if(num < 1)return false
  let n = num
  while(n>1){
    if(n%2)return false
    n = n/2
  }
return true
}