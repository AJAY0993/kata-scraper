function minValue(arr,n){
  //coding and coding..
  const mins = []
  for(let i = 0, j = n - 1; j < arr.length; j++,i++){
    let min = arr[i]
    let c = i
    while(c<=j){
      if(arr[c] <= min){
        min = arr[c]
      }
      c++
    }
    mins.push(min)
  }
  return mins
}
