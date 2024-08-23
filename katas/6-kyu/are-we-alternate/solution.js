function isAlt(word) {
  // happy codinggg
  word = word.toLowerCase()
  const first = 'aeiou'.includes(word[0]) ? 'vowel' : 'consonant'
  if(first == 'consonant'){
    for(let i=0; i<word.length; i++){
        if(i%2){
          if(!'aeiou'.includes(word[i])) return false
        }else{
          if('aeiou'.includes(word[i])) return false
        }
     }
    return true
  } else{
        for(let i=0; i<word.length; i++){
            if(i%2){
                if('aeiou'.includes(word[i])) return false
            }else{
                if(!'aeiou'.includes(word[i])) return false
            }
        }
        return true
  }
}