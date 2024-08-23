function DNAStrand(dna){
  //your code here
 const obj = {A:"T",T:"A",C:"G",G:"C"}
 return [...dna].map(x=> obj[x]).join('')
}