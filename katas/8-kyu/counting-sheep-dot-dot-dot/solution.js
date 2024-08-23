function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sum = 0
  arrayOfSheep.forEach((x) => {
    if(x ===true){
      sum += 1
    }
  })
  return sum
}