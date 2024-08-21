Array.prototype.transpose = function() {
//complete solution
  let output = []
  if ( this.length < 1  ) return [] ;
  if ( this[0].length < 1) return [[]] ;
  for(i=0; i<this[0].length; i++){
    let arrToPush = []
    this.forEach(nestedArray=> arrToPush.push(nestedArray[i]));
    output.push(arrToPush);
  }
  return output
};
