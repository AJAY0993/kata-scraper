function remove (string) {
  //coding and coding....
  const arr = string.split('')
  if(arr[arr.length-1]=='!'){
    return arr.slice(0,arr.length-1).join('')
  }
  else{
    return string
  }
  
}