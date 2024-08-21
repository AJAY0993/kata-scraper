function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total = 0
  classPoints.forEach((x)=> total += x)
  total += yourPoints
  
  let avg = total / (classPoints.length +1)
  
  if(yourPoints  >= avg){
    return true
  }
  else {return false }
}
