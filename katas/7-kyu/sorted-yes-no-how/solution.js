function isSortedAndHow(array) {
  if([...array].sort((a,b)=>a-b).every((x,i)=>x===array[i]) ){return "yes, ascending"}
  if([...array].sort((a,b)=>b -a).every((x,i)=>x===array[i]) ){return "yes, descending"}
  else{return "no"}
}