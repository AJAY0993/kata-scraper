function determineTime (durations) {
  //have fun with coding ^.^
  return 24*60*60 >= durations.reduce((acc, t) => {
    const [hr, min , sec] = t.split(":")
    return acc + hr*60*60 + min*60 + sec*1
  },0) 
}