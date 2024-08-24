var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if(typeof iterable === typeof 'j'){
   let arr =  iterable.split('')
let ourOnlyUniqueELementArr = arr.map((x,i,z)=> {if(z[i-1]!==x){return x}})

while(ourOnlyUniqueELementArr.includes(undefined)){
let i = ourOnlyUniqueELementArr.indexOf(undefined)
ourOnlyUniqueELementArr.splice(i,1)}
return ourOnlyUniqueELementArr
}
else{
  let ourOnlyUniqueELementArr = iterable.map((x,i,z)=> {if(z[i-1]!==x){return x}})
while(ourOnlyUniqueELementArr.includes(undefined)){
let i = ourOnlyUniqueELementArr.indexOf(undefined)
ourOnlyUniqueELementArr.splice(i,1)}
return ourOnlyUniqueELementArr
}
return ourOnlyUniqueELementArr
  }
  
  
  
  
  
  
  
  
  
  
  
