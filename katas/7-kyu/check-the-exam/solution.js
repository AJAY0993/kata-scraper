function checkExam(array1, array2) {
 // good luck
let  score =  array2.map((x,i)=>{if(x === ""){return 0}
else{ return x===array1[i] ? 4 : -1}  })

return score.reduce((t,x)=>t+x,0) < 0 ? 0 : score.reduce((t,x)=>t+x,0)
}