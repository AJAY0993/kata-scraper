function distinct(a) {
let arr =[];

for( i=0; i<a.length;i++){
  
  if (!arr.includes(a[i])) {
    
    arr.push(a[i]);
  }
}


  return arr;
}