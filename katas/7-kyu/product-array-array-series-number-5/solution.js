function productArray(numbers){
  //your code here
 return numbers.map((int,index1)=> numbers.filter((elem,index2)=> index1!==index2 ).reduce((t,elem)=>t*elem,1) )  
}