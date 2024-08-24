
function solve (arr) {
 let a = arr.filter((x,i)=> x > arr[i+1] ).length === 0;
 let d = arr.filter((x,i)=> x < arr[i+1] ).length ===0;
 if(a)return 'A';
  if(d)return 'D';
  function l (arr){
  let a = arr.filter((x,i)=> x > arr[i+1] ).length ===0;
  let d = arr.filter((x,i)=> x < arr[i+1] ).length ===0;
  return a ? 'RA' : d ? 'RD' :'na'
}
   let r = false
   let lh = arr.length
   arr = [...arr,...arr]
    let i = 0;
  while (i<lh){
   let n = l(arr.slice(i,lh + i))
    if(n !== 'na') return n
    i++
  }
}