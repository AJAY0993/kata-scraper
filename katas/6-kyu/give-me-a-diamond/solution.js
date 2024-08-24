function diamond(n){
 if(n%2 === 0 || n<0) return null;
 let str = '' 
 let diamond = '*'
 let dot = ' '
 let k = Math.floor(n/2);
 let j = 1 
 if(n===1)return diamond  + '\n';
 for(i=1; i<=n; i++){
   str+= dot.repeat(k) + diamond.repeat(j) + '\n'
    if(i < (n/2)){
      j+=2
      k--
    }
   else{
     j-=2
     k++
   }
 } 
  return str
}