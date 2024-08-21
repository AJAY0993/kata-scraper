function encrypt(text, n) {
 if(!text || n<0){
 return text
} 
let base = text.split('')  
for(let i=0; i<n; i++){
  const b = base.filter((x,i)=> i%2===0)
  const f = base.filter((x,i)=> i%2)
  base = [...f,...b]
    }
 return base.join('')
}

function decrypt(encryptedText, n) {
  if(!encryptedText || n<0) return encryptedText

  let base = encryptedText.split('')
  let r = []
  const midIndex = Math.floor(encryptedText.length/2) - 1;
  
for(let i=0; i<n; i++){
let even = 0;
let odd = 1;  
base.forEach((x,i)=> {
  if(i<=midIndex){
    r[odd] = x
    odd+= 2
  }else{
     r[even] = x
    even+= 2
  }
})
    base = [...r]
    r = []
    }
 return base.join('')
}
  




