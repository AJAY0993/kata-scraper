function insertDash(num) {
   //code me
  const arr = num.toString().split('')
  return [...arr].map((x,i)=>{
    if(x % 2 !== 0 && arr[i+1]%2 !==0 && i !== arr.length-1){
      return x+'-'
    }
    else{
      return x
    }
  }).join('')
}
