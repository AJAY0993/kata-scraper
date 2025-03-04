function stringy(size) {
  // your code here   
  let stringyString = "1"
  for(i=2; i<=size; i++){
    if(i%2 ===0){
      stringyString += "0"
    }
    else {stringyString += "1"}
    
  }
  return stringyString
}