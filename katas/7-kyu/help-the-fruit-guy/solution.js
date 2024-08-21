function removeRotten(arr){
  // ...
  if( arr !== null && arr){
  return arr.map(x=> x.replace('rotten','').toLowerCase());
}
  return []
}