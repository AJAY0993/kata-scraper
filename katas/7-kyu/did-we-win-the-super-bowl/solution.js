function didWeWin(plays){
  // Well, did we win or not!!!
  let points = 0
  console.log(plays)
  for(let i of plays){
    if(points>10)return true
    if(i[1] === 'pass' || i[1] === 'run') points+= i[0]
    if(i[1] === 'sack') points-= i[0]
    if(i[1] === 'turnover') return false
  }
  return points>10
}