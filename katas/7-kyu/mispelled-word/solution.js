var mispelled = function(word1, word2)
{
if(word2.slice(1) == word1 || word1.slice(1) == word2 )return true
  if(word2.slice(0,-1)==word1 || word1.slice(0,-1)==word2 )return true
  let misspelled = 0
  for(i=0; i<word1.length; i++){
    if(word1[i] !== word2[i]) misspelled++
    if(misspelled>1)return false
  }
  return true
}

