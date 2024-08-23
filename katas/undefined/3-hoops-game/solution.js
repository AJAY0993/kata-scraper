const prizeCounter = (s) => {
  //code here
  let Ractive = true;
  let Gactive = true;
  let Bactive = true;
  let r=0,g=0,b=0;
  let score = 0;
  
  for(let i of s){
    if(i === 'R'){
      r++;
      g = 0;
      b = 0;
      if(Ractive){
      score+= r===3 ? 600 : 100;
      if(r===3){
        r = 0;
        Ractive = false;
        Gactive = true;
        Bactive = true;
      }
     }
    }
    if(i === 'G'){
      r=0;
      g++;
      b=0;
      if(Gactive){
      score+= g===3 ? 300 : 100;
      if(g===3){
        g = 0;
        Ractive = true;
        Gactive = false;
        Bactive = true;
      }
     }
    }
    if(i === 'B'){
      r=0;
      g=0;
      b++;
      if(Bactive){
      score+= b===3 ? 400 : 100;
      if(b===3){
        b = 0;
        Ractive = true;
        Gactive = true;
        Bactive = false;
      }
     }
    }
  }
  return score;
}