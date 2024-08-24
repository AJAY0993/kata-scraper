// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
return names.sort((a,b)=>{
  let name1 = a.toLowerCase();
  let name2 = b.toLowerCase();
  if(name1 < name2) return -1;
  if(name2 < name1) return 1;
  return 0;
})
  
}
