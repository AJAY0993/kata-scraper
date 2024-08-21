function isOpposite(s1,s2){
  //coding here...
  
  if(s1.length<1 || s2.length<1){return false}
  
 let arr =  s1.split('')
 arr = arr.map(x => { if(x == x.toUpperCase()){
   return x.toLowerCase()
 }else{
   return x.toUpperCase()
 }})

 return arr.join('') === s2 ? true : false 
}

