function elevator(left, right, call){
  // code on! :)
if (Math.abs(call - left) < Math.abs(call - right)) return 'left';
else if  (Math.abs(call - left) > Math.abs(call - right)) return 'right';
  else return 'right';
}