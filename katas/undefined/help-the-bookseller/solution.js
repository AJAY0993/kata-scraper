function stockList(listOfArt, listOfCat){
  // ... 
  const list ={}
listOfArt.forEach(x=> list[x.split(' ')[0] ] = x.split(' ')[1]  )

const keys = Object.keys(list)

const output ={}
for(i of listOfCat){
    for(j of keys){
        if( j.startsWith(i) ){

        output[i] ? output[i] += +list[j] : output[i] =  +list[j]
        }
        else{output[i] ? output[i] += +0   : output[i] =  +0 }
    }
    
}

return Object.keys(output).map(x=> `(${x} : ${output[x]})`).join(' - ')
}