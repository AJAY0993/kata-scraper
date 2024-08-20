function planeSeat(a){
  const valid = ' ABCDEFGHK'
  const num = a.length > 2 ? +a.slice(0,2) : +a[0]
  const alpha = a[a.length-1]
  if(num > 60 || !valid.includes(alpha) ) return 'No Seat!!'
  const cluster = alpha == 'A' || alpha == 'B' || alpha == 'C' ? 'Left' : alpha == 'D' || alpha == 'E' || alpha == 'F' ? 'Middle' : 'Right'
  const section = num < 21 ? 'Front' : num < 41 ? 'Middle' : 'Back'
  return section + '-' + cluster  
}