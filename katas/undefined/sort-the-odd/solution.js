function sortArray(array) {
  // Return a sorted array.
  let oddArr = array.filter(x => x%2 !== 0).sort((a,b)=>a-b)
  let index = -1
  return array.map(x=> {
    if(x%2 !== 0){
       index++
       return x = oddArr[index]      
    }
    else{
       return x 
    }
})
}