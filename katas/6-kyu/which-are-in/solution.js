function inArray(array1,array2){
  //...
  return array1.reduce((acc,word)=>{
    if(array2.some(x=>x.includes(word))) acc.push(word)
    return acc
  },[]).sort()
}