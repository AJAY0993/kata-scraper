
function arrayManip(arr){
  // your code goes here
  let array = [...arr]
  for(let i = 0; i<array.length; i++){
    let foundIndex = null
    
    let arr2 = arr.slice(i+1)
    arr2.sort((a,b)=> a - b)
    for(let elm of arr2){
      if(elm > arr[i]){
        foundIndex = elm
        break;
      }
    }
    if(foundIndex === null){
      array[i] = -1;
    }
    else{
      let temp = array[i];
      array[i] = foundIndex;
      //array[foundIndex] = temp;
    }
  }
   return array
}
