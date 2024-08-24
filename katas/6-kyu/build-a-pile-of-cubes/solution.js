function findNb(m) {
    // your code
  let vol = 0
  let n = 1
while(vol<m){
  vol += n*n*n
  n++
}
 return vol !== m ? -1 : n-1
}
