
let sampleArray = ["Keep", "Remove", "Keep", "Remove", "Keep",'remove','keep']

function removeEveryOther(arr){
  //your code here
  let newArray = []
 for(i=0; i<arr.length; i++)
   {
     
     if(i%2 ===0){
       newArray.push(arr[i])
     }
    
   }
 return newArray
}
removeEveryOther(sampleArray)