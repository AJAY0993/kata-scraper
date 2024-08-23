function squareUp(n)
{const arr = []
     // Do your magic!
  for(i=0;i<n;i++){
    let c = 1;
    for(j=0;j<n;j++){
      if(j <= n-1-i){
        arr.push(c)
        c++
      }else{
        arr.push(0)
      } 
    }
  }
 return arr.reverse()
}
