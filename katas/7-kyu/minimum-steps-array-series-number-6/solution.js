function minimumSteps(numbers, value){
  //your code here
let sum = 0
numbers = numbers.sort( (a,b)=> a-b )
  
for (i=0; i<numbers.length; i++){
  sum += numbers[i]
  if(sum>=value) return i
}

}