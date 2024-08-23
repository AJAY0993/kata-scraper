function duplicateEncode(word){
    // ...
  word = word.toLowerCase()
  let obj = {}
  word.split('').forEach(x=> {if(obj[x]){
    obj[x]++
  }
  else{
    obj[x] = 1
  }
                              })
  console.log(obj)
  return word.split('').map(x=> obj[x] > 1 ? ')' : '(' ).join('')
}
