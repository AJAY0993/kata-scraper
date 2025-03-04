function bouncingBall(h,  bounce,  window) {
  // your code here
  let height = h
  let fallingAndBouncing = 0
 
 if(h>0 && window<h && bounce >0 && bounce <1) {while(height > window){
    fallingAndBouncing+= 2
    
    height = height * bounce 
    
  }}
 
  else{
    return -1
  }
  return fallingAndBouncing -1
}