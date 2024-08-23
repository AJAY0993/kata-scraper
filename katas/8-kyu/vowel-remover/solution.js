function shortcut (string) {
  const obj = {
     'a':'',
     'e':'',
     'i':'',
     'o':'',
     'u':''
  }
 return string.split('').map(x => {
   if(x==='a'|| x==='e' ||x==='i' ||x==='o'|| x==='u'){
     return obj[x]
   }
   else{return x}
 } ).join('')
}