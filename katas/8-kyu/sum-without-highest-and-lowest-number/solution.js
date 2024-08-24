function sumArray(array) { 
if(!array || array.length <2){return 0}
else{
return array.sort((a,b)=> a-b).filter((x,i)=> i>0 && i< array.length -1).reduce((acc,x) =>acc+x, 0)
}
  }