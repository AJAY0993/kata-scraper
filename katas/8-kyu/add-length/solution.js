function addLength(str) {
//start-here
str = str.split(' ')
  
  for(i=0; i<str.length; i++){
    str[i] = str[i] + " " + str[i].length
   }
  
  return str
}
