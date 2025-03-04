function vowelIndices(word){
  //your code here
  let vowels = 'aeiouyAEIOUY'
return [...word].reduce((acc,letter,i)=>{
                 if(  vowels.includes( letter )  )acc.push(++i) ;
                 return acc
                 },[])
}