function mxdiflg(a1, a2) {
    // your code
  let max = -1
  for(let i = 0; i < a1.length; i++){
    for(let j = 0; j < a2.length; j++){
      let diff = Math.abs(a1[i].length - a2[j].length)
      if(diff > max){
        max = diff
      }
    }
  }
    return max
}