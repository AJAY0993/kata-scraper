function duplicates(arr) {
  //le;TODO: return the array of duplicates from arr
  let set = new Set();
  let dups = new Set();
  for(let i of arr){
    if(set.has(i)){
      dups.add(i)
    }
    set.add(i);
  }
  return [...dups]
}