function trouble(arr, t){
  for(i=0; i<arr.length; i++){
    if(arr[i] + arr[i+1] == t){
     arr.splice(i+1,1)
      i--
   }
  }
  return arr
}
