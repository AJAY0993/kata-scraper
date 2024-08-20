function seaSick(x){
let changes = 0

for(i=1;i<x.length;i++){
  if(x[i]!==x[i-1])changes++
}
  
return  changes < (x.length/100)*20 ? "No Problem" : "Throw Up"
}