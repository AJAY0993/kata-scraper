// complete the function
function solution(string) {
    let s = []
    let j = 0;
    for(i=0; i<string.length; i++){
      if(string[i].charCodeAt() < 96){
        s.push(string.slice(j,i)) 
        j = i;
      }
    }
  s.push(string.slice(j,i))
  return s.join(' ')
}
