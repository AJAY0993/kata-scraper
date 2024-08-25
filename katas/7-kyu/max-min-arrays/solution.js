function solve(arr){
  let sortedArr = [...arr].sort((a,b)=>a-b)
 return arr.map((x,i)=> i%2 ? sortedArr.shift() : sortedArr.pop())
};