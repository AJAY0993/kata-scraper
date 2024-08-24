function solve(arr){
//..
  const result = []
  arr.forEach((e,i)=>{
    if(arr.slice(i+1).every(elm => elm < e)){
      result.push(e)
    }
  })
  return result
};