function well(x){
if(!x.includes('good')){
  return 'Fail!'
}
  else {
 let arr =    x.filter(x=> x === 'good')
    if(arr.length <= 2){
      return 'Publish!'
    }
    else{
      return 'I smell a series!'
    }
  }
}