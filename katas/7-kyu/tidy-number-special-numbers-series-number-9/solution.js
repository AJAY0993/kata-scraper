function tidyNumber(n){
  //your code here
  return [...String(n)].every((x,i,arr)=> x <= arr[i+1] || i == arr.length-1  )
}