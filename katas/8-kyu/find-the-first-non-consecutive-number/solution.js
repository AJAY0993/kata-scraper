function firstNonConsecutive (arr) {
const result = arr.find((x,i)=> x!== arr[i-1]+1 && i !== 0)

if(result===0){
  return 0
}
  else if(result){
    return result
  }
  else{return null}
}