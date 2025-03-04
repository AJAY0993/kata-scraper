function sumNoDuplicates(numList) {
  const m = {}
  let sum = 0
  for ( i of numList){
    if(m[i]){
      if(m[i].deducted) continue;
      sum-= i
      m[i].deducted = true
      continue;
    }
    else {
        sum += i
        m[i] = {included :true}
      }
  } 

  return sum;
}