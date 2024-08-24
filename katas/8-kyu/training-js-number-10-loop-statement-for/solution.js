function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for (i of arr){
    (i%2)?odd.push(i):even.push(i)
  }
  
  return [odd,even];
}