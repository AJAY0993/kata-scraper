const xMarksTheSpot = (input) => {
  if(input.length < 1)return [];
  let c = 0;
   let cordinates = false;
  for(i = 0; i < input.length; i++){
    for(j = 0; j < input[i].length; j++){
      if(input[i][j] === 'x'){
        c++
        cordinates = [i,j]
      }
    }
  }
  return c === 1 ? cordinates : []
}