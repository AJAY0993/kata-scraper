function past(h, m, s){
  //#Happy Coding! ^_^
 if(h<24 && m<60 && s<60){ 
  h *= 3600000
  m*= 60000
  s*= 1000
  
  return h +m +s}
  
}