function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  return Math.max(n,m) % Math.min(n,m);
}