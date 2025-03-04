function min(arr, toReturn) {
  // TODO
  let min = undefined;
  let I = undefined;
  for(i=0; i<arr.length; i++){
    if(i === 0){
      min = arr[i];
      I = i;
      continue;
    }
    if(min > arr[i]){
      min = arr[i];
      I = i
    }
  }
  return toReturn === 'value' ? min : I
}