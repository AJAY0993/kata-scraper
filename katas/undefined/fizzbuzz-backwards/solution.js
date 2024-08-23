function reverseFizzBuzz(array) {
  // your code
  let x = array.indexOf("Fizz");
  let y = array.indexOf("Buzz");
  let z = array.indexOf("FizzBuzz");
  
  if( z >= 0){
    x = x < 0 ? z : Math.min(x,z);
    y = y < 0 ? z : Math.min(y,z);
  }
  
  return ([x+1,y+1])
  
  }
