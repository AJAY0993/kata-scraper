function getMiddle(s)
{
  //Code goes here!
  let l = s.length
  if(l%2 === 0){
    return s.charAt(l/2 -1) + s.charAt(l/2 )
  }
  else{return s.charAt(Math.floor(l/2))}
}