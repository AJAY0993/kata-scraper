function headSmash(array) {
  // This is gonna hurt!
 if(array.length < 1 ) {
return "Gym is empty"}
else if( typeof(array) !=='object' || array.every(x => typeof(x) === 'number') ){
 return "This isn't the gym!!"} 
else {return array.map(x => x.replaceAll('O',' '))}
  
}