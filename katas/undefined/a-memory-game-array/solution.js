function createTiles(n){
  // TODO: Return array of bricks
  let arr = []
  let obj = {}
  
  while(arr.length < n){
   if(n%2 || n===0) return [] 
   const pair = n/2 
   let num = Math.floor(Math.random() * pair) + 1;
   if(!obj[num]){
     arr.push(num)
     obj[num] = 1;
   }if(obj[num] < 2){
     arr.push(num)
     obj[num]++
   }
  }
  return arr
}