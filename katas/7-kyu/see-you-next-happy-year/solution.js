const isHappyYear = (year) => {
  year = year.toString()
  const map = {}
  for(let i of year){
    if(map[i]) return false
    else map[i] = true
  } 
  return true
}

function nextHappyYear(year){
  //your code here
  while(true){
    year = year + 1
    if(isHappyYear(year)) return year
    }
  }