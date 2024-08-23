const total =  (arr)=> {
while(arr.length>1){
arr = arr.slice(0,-1).map((x,i)=> x + arr[i+1])
}
  return arr[0]
}