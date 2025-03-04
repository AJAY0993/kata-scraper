function findOdd(A) {
  let ans;
  //happy coding!;
  const myObj ={}
  A.forEach(x=>{
    myObj[x]?myObj[x]++ : myObj[x] = 1
  })
  for(prop in myObj){
  if(myObj[prop]%2  !== 0) return +prop
}
}