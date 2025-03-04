function gimme (triplet) {
  let arr =  triplet.map(x=>x)
  let middleNo = arr.sort((a,b)=>a-b)[1]
return triplet.indexOf(middleNo)
}