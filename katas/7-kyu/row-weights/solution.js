function rowWeights(array){
  //your code here
return [array.filter((x,i)=> i%2 === 0).reduce((acc,x)=>acc+x,0), array.filter((x,i)=>i%2===1).reduce((acc,x)=>acc+x,0)]
}