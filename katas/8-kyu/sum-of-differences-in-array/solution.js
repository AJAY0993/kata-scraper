function sumOfDifferences(arr) {
 let sortedArr =  arr.sort((a,b)=> b-a)
 let sum = 0;
 for(i=0; i<sortedArr.length-1; i++){
   sum += sortedArr[i] - sortedArr[i+1]
 }
  return sum
}