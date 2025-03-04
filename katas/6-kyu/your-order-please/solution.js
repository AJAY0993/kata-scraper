function order(words){
  // ...
  const nums = ['1','2','3','4','5','6','7','8','9']
  if(words === "") return "";
  words = words.split(" ")
  words = words.map(x => {
    for(let n of nums){
      if(x.includes(n)){
        return {i:parseInt(n),w:x}
      }
    }
  })
  words.sort((a,b)=> a.i - b.i)
  return words.map(x => x.w).join(" ")
}