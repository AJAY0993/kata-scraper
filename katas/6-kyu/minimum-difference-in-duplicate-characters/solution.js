function minRepeatingCharacterDifference(text) {
    let map = {
      
    } //i , diff
    
    let repeadtedChar = []
    for(let i = 0; i < text.length; i++){
      if(map[text.at(i)]){
        const [last, currDiff] = map[text.at(i)]
        const diff = i - last
        if(diff < currDiff){
          map[text.at(i)] = [i, diff]
        }
        
        if(repeadtedChar.length === 0){
          repeadtedChar = [diff, text.at(i)]
        } else{
          if(diff < repeadtedChar[0]){
          repeadtedChar = [diff, text.at(i)]
        }
        }
      } else{
        map[text.at(i)] = [i , Number.MAX_SAFE_INTEGER]
      }
    }
  return repeadtedChar.length ? repeadtedChar : null
}