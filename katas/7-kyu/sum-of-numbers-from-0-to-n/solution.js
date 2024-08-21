var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(n) {
    if(n>0){
      const sum =  (n+1)/2*(n)
      let arr =[]
    for(i=0; i<=n; i++){
      arr.push(i)
    }
      return arr.join('+') +  ' = ' + sum
    }
 return  n < 0 ? `${n}<0` : `${n}=0` 
  };

  return SequenceSum;

})();