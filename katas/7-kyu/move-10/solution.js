function moveTen(s){
  let res = ''
 for(i=0; i<s.length; i++){
 let c = s.charCodeAt(i)+10
     c = c > 122 ? c - 122 + 96 : c
   res += String.fromCharCode(c)
 }
  return res
}