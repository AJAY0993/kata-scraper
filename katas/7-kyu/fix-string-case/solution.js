function solve(s){
    //..
  let lowerCase = 0
  let upperCase = 0
  for(let i of s){
    const charCodeA = 'A'.charCodeAt(0)
    const charCodeZ = 'Z'.charCodeAt(0)
    
    if(i.charCodeAt(0) >= charCodeA && i.charCodeAt(0) <= charCodeZ){
      upperCase++
    } else if(i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122){
      lowerCase++
    }
  }
  
  return lowerCase >= upperCase ? s.toLowerCase() : s.toUpperCase() 
         
}