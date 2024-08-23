function every(arr, interval, start){
  // ...
  let res = []
  let initial = start ? start : 0 
  let int = interval;
  if(int === 1 || !interval)return arr.slice(start)
  for(i = initial; i<arr.length; i++){
    if(int === interval){
      res.push(arr[i])
      int = 1;
    }
   else{int++}
  } 
  return res
}