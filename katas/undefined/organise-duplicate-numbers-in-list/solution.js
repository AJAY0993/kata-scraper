function group(arr) {
 let copyArr = arr.slice().sort((a,b)=> a-b)
 let obj = {}
 let result = []
 let j = 0;
  
 for(i=0;i<arr.length;i++){
   if(copyArr[i] !== copyArr[i+1]){
     obj[copyArr[j]] =  copyArr.slice(j,i+1) 
     j = i + 1
    }
 }
  const set = new Set(arr)
  set.forEach(x => result.push(obj[x]))
  return result
}