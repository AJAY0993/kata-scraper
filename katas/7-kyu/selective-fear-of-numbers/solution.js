var AmIAfraid = function(day, num){
  //Help me...
  day = day.toLowerCase()
  if(day==='monday'&& num === 12){return true}
  else if(day === 'tuesday' && num > 95){return true}
  else if(day === 'wednesday' && num === 34){return true}
  else if(day === 'thursday' && num  === 0){return true}
  else if(day === 'friday' && num%2 === 0){return true}
  else if(day === 'saturday' && num === 56){return true}
  else if(day === 'sunday' && (num === 666 || num === -666)){return true}
  else{return false}
}