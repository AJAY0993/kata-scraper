function matrix(array) {
  const result = []
  array.forEach((x,i)=>{
    result.push(x)
    if(result[i][i] < 0){
    result[i][i] = 0
    }else{
       result[i][i] = 1
    }
  })
  return result
}