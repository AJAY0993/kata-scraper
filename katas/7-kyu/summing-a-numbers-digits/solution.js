function sumDigits(number) {
 return  String(number).split('').filter(x=> x!=='-').reduce((t,x)=>t+(+x),0)
}
