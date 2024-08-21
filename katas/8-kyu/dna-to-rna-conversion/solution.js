function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
 let dnaArr =  dna.split('')
 
 for(i=0; i<dnaArr.length; i++){
  if(dnaArr[i] === 'T') {
 let indexOfT = dnaArr.indexOf('T')
dnaArr[indexOfT] = 'U'
    }
     }
dnaArr = dnaArr.join('')
  return dnaArr
}