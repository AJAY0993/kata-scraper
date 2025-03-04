const sentence = arrayOfObjects => {
arrayOfObjects.sort((a,b)=>{
  if(Object.keys(a)[0] - Object.keys(b)[0] > 0){
    return 1
  }
  else if(Object.keys(a)[0] - Object.keys(b)[0] < 0){
    return -1
  }
  return 0
})
  
return arrayOfObjects.map(obj => {
  for(key in obj){
    return obj[key]
  }
}).join(' ')
}