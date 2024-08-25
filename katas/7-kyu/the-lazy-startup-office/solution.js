function binRota(arr){
  let result =[]
 arr.forEach((x,i)=> i%2 == 0 ? x.forEach(name => result.push(name) ) : x.reverse().forEach(name => result.push(name) ) )
  return result
}