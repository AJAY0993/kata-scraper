function dashatize(num) {
  const n = Math.abs(num)
  let arr = [...String(n)]
  if(arr.length === 1)return arr[0]
  let s =  arr.map((x,i)=> +x%2 && i !==( arr.length - 1) && (i!==0) ? '-' + x + '-' :  +x%2 && i===0? x + '-' : +x%2 && i===arr.length-1 ? '-' + x : x).join('')
  console.log(s) 
 while(s.includes('--')){
   s = s.replace('--','-')
 }
  return s
}