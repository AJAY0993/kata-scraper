function countWins(winnerList, country) {
  // your awesome code here
  let c = 0;
  
  winnerList.forEach(x => x.country === country ? c+= 1: c+= 0)
  return c
}