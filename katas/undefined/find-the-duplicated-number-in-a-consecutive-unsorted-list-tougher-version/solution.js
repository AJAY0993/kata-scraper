var findDup=function(arr){
  //your code here
  const nums = {};
  for(i=0; i<arr.length; i++){
    if(nums[arr[i]]) return arr[i]
    nums[arr[i]]=true;
  }
}