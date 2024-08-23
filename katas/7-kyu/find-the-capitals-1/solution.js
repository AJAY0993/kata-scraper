var capitals = function (word) {
	// Write your code here
  return word.split('').map((x,i) =>{
    if(x=== x.toUpperCase()){return i}else{undefined}
  }).filter(x=> x!==undefined)
};