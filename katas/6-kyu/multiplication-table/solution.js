const multiplicationTable = size => {
  // insert code here
  let arr =[]
  for(i=1; i<=size; i++){
    let x =[]
    for(j=i; j<=i*size; j+= i){
     x.push(j) 
    }
    arr.push(x)
  }
  return arr
}
