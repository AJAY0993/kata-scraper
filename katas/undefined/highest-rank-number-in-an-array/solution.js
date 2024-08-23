function highestRank(arr){
//Your Code logic should written here
  let obj = {}
  arr.forEach((x,i)=> {
    obj[x] ? obj[x]++ : obj[x] = 1
  })
  let keys  =  Object.keys(obj);
  keys.sort((a,b)=> obj[a] - obj[b]);
  return +keys.pop()
}