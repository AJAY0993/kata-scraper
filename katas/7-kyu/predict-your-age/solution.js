function predictAge(...ages){
  // your code
 let age = Math.sqrt( ages.reduce((acc,x)=>acc+ x*x,0) )
return Math.floor(age/2)
}