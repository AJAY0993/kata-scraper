function tram(stops, descending, onboarding){
  //your code here
  let minCap = 0;
  let currPas = 0;
  for (let i = 0; i < stops; i++){
    currPas-= descending[i];
    currPas+= onboarding[i];
    minCap = Math.max(minCap, currPas)
  }
  
  return minCap;
}