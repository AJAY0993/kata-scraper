function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks arramarks.
  let sum =0 ;
   
  
  marks.forEach((x) => {sum = sum + x})
  return Math.floor(sum/marks.length)
}