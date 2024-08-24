function modifyMultiply (str,loc,num) {
//Code here
  str = str.split(' ')
  return Array.from({length:num},(x=>str[loc])).join('-')
} 