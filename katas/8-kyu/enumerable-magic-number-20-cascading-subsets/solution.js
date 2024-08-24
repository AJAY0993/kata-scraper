function eachCons(array, n) {
  if( n > array.length )return []
	let arr = [];
  for(let i=0; i<array.length; i++){
    arr.push(array.slice(i,i+n))
    if(i+n === array.length) break;
  }
  return arr;
}