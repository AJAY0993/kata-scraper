function isVow(a){

return a.map(x=> {
  if(x == 'a'.charCodeAt(0) || x =='e'.charCodeAt(0) || x == 'i'.charCodeAt(0) || x=='o'.charCodeAt(0) || x=='u'.charCodeAt(0)){
  return  x = String.fromCharCode(x)
  }
  else{
   return x = x
  }
})
}
