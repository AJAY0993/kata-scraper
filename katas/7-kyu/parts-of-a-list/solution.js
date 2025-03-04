function partlist(arr) {
    // your code 12345
const ans = []

for(i=0; i<arr.length; i++){
  if(i !== arr.length - 1){
    ans.push( [arr.slice(0,i+1).join(' ') , arr.slice(i+1).join(' ')] )
  }
}
  return ans
}