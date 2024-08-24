function checkRoot(string){
//your code here
  let arr = string.split(',')
  if(arr.length !== 4)return 'incorrect input';
  for(i=0; i<4; i++){
    arr[i] = +arr[i]
    if(!arr[i]){
      return 'incorrect input';
    }
    if(i > 0){
      if(arr[i] !== arr[i-1] + 1) return 'not consecutive';
    }
  }
  
  let prod = arr.reduce((acc,x)=>acc*x,1)
  let sqrt = Math.ceil(Math.sqrt(prod))
  return `${prod + 1}, ${sqrt}`
}