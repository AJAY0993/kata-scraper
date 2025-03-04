function reverseBits (n) {
  // your code here
 return parseInt((n.toString(2)).split('').reduce((a,n)=>n+a,''),2)
}