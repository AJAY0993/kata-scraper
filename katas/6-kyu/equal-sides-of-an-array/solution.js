function findEvenIndex(arr)
{
  //Code goes here!
  let left = 0;
  let right = arr.reduce((acc,x)=> acc + x,0);
  
  for(i=0; i<= arr.length; i++){
    if(i > 0) left+= arr[i-1];
    right-= arr[i]
    if(left === right) return i;
  }
  return -1;
}