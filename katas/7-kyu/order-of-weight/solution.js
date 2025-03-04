function arrange(arr){
//Insert code here
let weights = [...arr].map( (x,i)=> {
 return {index:i,
        value:+x.replace('KG','000').replace('T','000000').replace('G','')}
})

weights.sort((a,b)=> a.value - b.value )
return weights.map(x => arr[x.index])
}