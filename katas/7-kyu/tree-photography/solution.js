function treePhotography(trees) {
  // Do your stuff
 let cL = 0;
 let cR = 0;
 let l = trees.length 
 for(let c = 0; c < l; c++ ){
 if( c===0 || trees[c] > Math.max(...trees.slice(0,c)) ){
   cL++               
 }
 
 }
  
for(let c = l - 1; c>=0 ; c--){
 if(c === l-1 || trees[c] > Math.max(...trees.slice(c+1) )){
   cR++
 }
 
 }
  return cL > cR ? "left"  : "right"
}