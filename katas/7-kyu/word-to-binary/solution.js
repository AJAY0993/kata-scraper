
function wordToBin(str){
  //code away!!!
  return [...str].map(s=> s.charCodeAt(0).toString(2).padStart(8,0))
}
