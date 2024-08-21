function squareIt(int) {
int = String(int)
let n = Math.sqrt(int.length)
let res =  "Not a perfect square!-"
if(Number.isInteger(n)){
  res = ""
for(i=0; i<int.length; i+= n){
  res+= int.substring(i,i+n) + '\n'
}
}
  return res.slice(0,-1)
}