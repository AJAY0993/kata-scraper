function replaceCommon(string, letter) {
  let maxChar = ''
  let maxCount = 0
  let map = {}
  let lookUp = {}
  let lookUpArr = []
  for(let i of string){
    if(i in map){
      map[i]++
    }
    else if(map[i] === undefined){
      map[i] = 1
      lookUpArr.push(i)
      lookUp[i] = lookUpArr.length - 1
    }
        
    if(map[i] === maxCount && i !== ' '){
      if(lookUp[i] < lookUp[maxChar]){
        maxChar = i
      }
    }
    
    if(map[i] > maxCount && i !== ' '){
      maxCount = map[i]
      maxChar = i
    }
  }
  return string.replaceAll(maxChar,letter)
}