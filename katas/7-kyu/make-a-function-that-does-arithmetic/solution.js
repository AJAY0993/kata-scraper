function arithmetic(a, b, operator){
  //your code here!
  const arr = arguments
  if(arr[2]=='add'){
    return arr[0]+arr[1]
  }
   if(arr[2]=='subtract'){
    return arr[0]-arr[1]
  }
   if(arr[2]=='multiply'){
    return arr[0]*arr[1]
  }
   if(arr[2]=='divide'){
    return arr[0]/arr[1]
  }
}