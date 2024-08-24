function flyBy(lamps, drone){
  return lamps.split('').map((x,i) => i < drone.length ? 'o' : x).join('')
}