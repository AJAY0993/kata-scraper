function sortByValueAndIndex(array){
  let arr = array.map((x,i)=> {
  return { value:x,index:i+1}
 })
    arr.sort((a,b)=> {
    let prodA = a.value*a.index;
    let prodB = b.value*b.index;
    return prodA - prodB});
  return arr.map(x=> x.value)
}