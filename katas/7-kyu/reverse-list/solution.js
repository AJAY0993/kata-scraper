function reverseList(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}