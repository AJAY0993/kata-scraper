function humanReadable (seconds) {
  let hrStr = ''
  let minStr = ''
  let secStr = ''

  const hrs = Math.floor(seconds/3600)
  hrStr+= hrs
  if(hrStr.length === 1){
    hrStr = '0' + hrStr
  }
  seconds-= hrs*3600
  const mins = Math.floor(seconds/60)
  minStr+= mins 
  if(minStr.length === 1){
    minStr = '0' + minStr
  }
  
  seconds-= mins*60
  const secs = Math.floor(seconds)
  secStr+= secs
  if(secStr.length === 1){
    secStr = '0' + secStr
  }
  
  return hrStr + ':' + minStr + ':' + secStr ;
}