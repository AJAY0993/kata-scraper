function possiblyPerfect(key,answers) {
 let allCorrect = true
 let allInCorrect = true
 
 for(let i = 0; i<key.length; i++ ){
   if(key[i]!==answers[i] && key[i] !== '_' )allCorrect = false
   if(key[i]===answers[i])allInCorrect = false
   if(!allCorrect && !allInCorrect) return false
 }
  return true
}