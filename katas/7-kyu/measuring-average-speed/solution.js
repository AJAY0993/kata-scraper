function calculateSpeed(distance, time) {
// ...
  const inSec = time.includes('s')
  const inKm = distance.includes('km')
  
  const t =  inSec ? +time.replace('s','') : (+time.replace('min','') * 60)
  const d = inKm ? +distance.replace('km','') * 1000 : +distance.replace('m','')
  return `${Math.round(d/t * 2.23694)}mph`
  
  }