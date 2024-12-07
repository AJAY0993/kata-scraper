function evaporator(content, evap_per_day, threshold){ 
  const thresohldInMl = threshold * (content/100)
  let remaining = content
  let days = 0
  while(remaining > thresohldInMl){
    remaining-= remaining*(evap_per_day/100)
    days++
  }
  return days;
}