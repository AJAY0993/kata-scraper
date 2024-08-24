function arrayMash (a1, a2) {
  // do the mash
 
 return Array.from({length : a1.length * 2},(x,i)=>{
                                             if(i%2 === 0){
                                              return a2.pop()
                                             }
                                              else{
                                              return a1.pop()
                                              }
                                             }).reverse()
}