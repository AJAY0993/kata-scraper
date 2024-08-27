// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  const arr = string.split('.')
  console.log(this)
  let current = this
  
  for(let i = 0; i < arr.length; i++){
    if(current[arr[i]]){
       current = current[arr[i]]
       if(i === arr.length - 1) return current
    }
  }
  return undefined
}