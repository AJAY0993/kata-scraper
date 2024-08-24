function charCheck(text, max, spaces){
  //Do your magic here!
  let s = '';
  if(!spaces){
  for(i of text){
    s+= i !== ' ' ? i : ''
  }}
  else{
    s = text
  }
  return [s.length <= max , s.slice(0,max)]
};