function minValue(values){
  //your code here
  return +[...new Set(values)].sort((a,b)=>a-b).join('');
}