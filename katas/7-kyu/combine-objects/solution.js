function combine(...args) {
  // Your code here
  let result = {}
args.forEach(x=>{
  Object.keys(x).forEach(key=>result[key]? result[key] += x[key] : result[key]=x[key])
})
  return result 
}