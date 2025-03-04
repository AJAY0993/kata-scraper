function pillars(numPill, dist, width) {
  // your code here
  if (numPill  < 2 ) return 0
  return (width * (numPill - 2)) + dist * (numPill - 1)  * 100
}