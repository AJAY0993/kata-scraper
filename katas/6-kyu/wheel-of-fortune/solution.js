function winner(candidates) {
  let winner = false;
  let maxScore = 0;
  if(candidates.length > 3 || candidates.length < 3) return false;
  for(let i = 0; i < 3; i++){
    let cand = candidates[i];
    if(!cand.name || !cand.scores) return false;
    if(cand.scores.length === 0 || cand.scores.length > 2) return false;
    let candScore = 0;
    for(let score of cand.scores){
      if(score % 5 !== 0 || score > 100 || score < 0) return false;
      candScore+= score;
    }
    if(candScore <= 100 && candScore > maxScore){
      maxScore = candScore;
      winner = cand.name;
    }
  }
  return winner ;
}
