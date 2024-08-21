function findShort(s){
  return Math.min(...s.split(' ').map(x => x.length));
}