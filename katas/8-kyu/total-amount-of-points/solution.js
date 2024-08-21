function points(games) {
  let score=0;
  
  for(i=0;i<games.length;i++){
    let arr =games[i].split(":");

    if (arr[0]>arr[1]){
      score+=3;
    }
    else if(arr[0]===arr[1]){
      score+=1;
    }
  }
  
  return score;
}