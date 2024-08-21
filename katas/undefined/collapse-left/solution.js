function operationArguments(arr){
const result = []  
let num = null  
for(let i=0; i<arr.length - 1; i++){
  if(typeof(arr[i]) === 'number'){
      if(num !== null) result.push(num)
  }else{
    num = num === null ? arr[i](0) : arr[i](num)
    if(i === arr.length - 1) result.push(num)
  }
}
  return result
}

function operationArguments(arr){
  let num = null
  let result = []
  
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i]
    
    if (typeof val === "number") {
      if (num !== null) {
        result.push(num)
      }
       num = val
      
      num = val
    } else {
      const n = num === null ? 0 : num
      num = val(n)
    }
    
    if (i === arr.length - 1) {
      result.push(num)
    }
  }
  
  return result
}