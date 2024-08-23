function reverseLetter(str) {
  //coding and coding..
  
  return str.split('').map(s=>  {
     if(s.charCodeAt() > 90 && s.charCodeAt() < 97){return ""}
    if(s.charCodeAt() < 65 || s.charCodeAt() > 122){return ""}
     else{return s}
  }).reverse().join('')
  
  
}