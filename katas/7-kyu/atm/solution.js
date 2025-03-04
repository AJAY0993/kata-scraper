function solve(n) {
  // Your code here
  const notes = []
  if(n%10 !== 0)return -1;
  let remaining = n;
  
  notes.push(Math.floor(remaining/500))
  remaining = remaining - (notes[0]*500)
  
  if(remaining > 0){
    notes.push(Math.floor(remaining/200))
    remaining = remaining - (notes[1]*200)
    
  if(remaining > 0){
    notes.push(Math.floor(remaining/100))
    remaining = remaining - (notes[2]*100)
    
    if(remaining > 0){
      notes.push(Math.floor(remaining/50))
      remaining = remaining - (notes[3]*50)
      
      if(remaining > 0){
        notes.push(Math.floor(remaining/20))
        remaining = remaining - (notes[4]*20)
        
        if(remaining > 0){
          notes.push(Math.floor(remaining/10))
          remaining = remaining - (notes[5]*10)
  }    
  } 
  } 
  }
  }
  return notes.reduce((acc,x)=> acc + x,0)
}