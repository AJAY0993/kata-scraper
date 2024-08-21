function findMissing(arr1, arr2) {
  // Your solution here
   arr1.sort((a,b)=> a-b);
  arr2.sort((a,b)=> a-b);
 return arr1.find( (x,i)=> x !== arr2[i] )   
}
