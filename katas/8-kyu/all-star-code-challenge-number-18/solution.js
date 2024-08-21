function strCount(str, letter){  
  //code here
  let count = 0
  for(i of str.split('')){
  i === letter ? count++ : count+= 0
  }
  return count
}