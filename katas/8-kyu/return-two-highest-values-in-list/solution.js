function twoHighest(arr) {
  let newArr = arr.sort((a,b)=>b-a)
  if(!newArr){
    return []
  }
  
  else if(newArr.length ===1){
    return [newArr[0]] 
  }   
  
   else if(newArr[0] === newArr[1] && newArr.length>1){
     
    return [newArr[0],Math.max(... newArr.filter(x => x!== Math.max(...newArr)) ) ]
  }
  
   else if(newArr[0] !== newArr[1] && newArr.length>1){
    return [newArr[0],newArr[1]]
  }

  else{
    return []
  }
  
}