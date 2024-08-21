function duplicateCount(text){
  const obj = {};
  let count = 0;
  [... text.toLowerCase()].forEach(x => obj[x]?obj[x]++:obj[x]=1);
  for(let i in obj){
    if(obj[i]>1){
      count++
    }
  }
  return count;
}
