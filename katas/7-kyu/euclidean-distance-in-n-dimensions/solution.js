function euclideanDistance(p1, p2){
  let sum = 0
  for (let i = 0; i < p1.length; i++){
    sum+= (p2[i] - p1[i])**2
  }
  return parseFloat(Math.sqrt(sum).toFixed(2))
}