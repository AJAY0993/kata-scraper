function replace(s){
  //coding and coding....
  let vowels = {
    a:'!',
    A:'!',
    E:'!',
    e:'!',
    I:'!',
    i:'!',
    O:'!',
    o:'!',
    U:'!',
    u:'!'
  }
  return s.split('').map(x=> vowels[x] || x).join('')
  
  
}