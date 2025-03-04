function fakeBin(x){
let binaryArr = x.split('').map(x => {
  if(x<5){return 0}
else{return 1}
} )

return binaryArr.join('')
}