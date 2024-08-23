function common(a,b,c){
 //..
 
return a.reduce((acc,e)=>{
         if(b.includes(e) && c.includes(e)){
           acc+= e;
           b.splice(b.indexOf(e),1);
           c.splice(c.indexOf(e),1);
         }
  return acc
         },0)
}