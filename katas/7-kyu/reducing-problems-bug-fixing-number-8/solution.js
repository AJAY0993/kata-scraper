function calculateTotal(team1, team2) {
  if(team1.length>0 && team2.length>0){
  var t1s = team1.reduce((t, c) => t + c) 
  var t2s = team2.reduce((t, c) => t + c)
  return t1s > t2s ? true : false; 
}
  else{
    return team1.length>0 ? true : false
  }
   

}