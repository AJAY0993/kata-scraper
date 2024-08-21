function isPangram(string){
  //...
  const s =  string.toLowerCase()
 if(s.includes('a') && s.includes('b')&& s.includes('c') && s.includes('d')&& s.includes('e') && s.includes('f')&& s.includes('g')&& s.includes('h')&& s.includes('i')&&
  s.includes('j') && s.includes('k')&& s.includes('l') && s.includes('m') && s.includes('n') && s.includes('o')&& s.includes('p')&& s.includes('q')&& s.includes('r') &&
  s.includes('s') && s.includes('t')&& s.includes('u') && s.includes('v')&& s.includes('w') && s.includes('x')&& s.includes('y')&& s.includes('z') ){
   return true
  }
  else{
    return false
  }
 }