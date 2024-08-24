function arrayLeaders(numbers){
  return numbers.filter((num,i)=>{
    return num > numbers.slice(i+1).reduce((total,val)=> total + val,0 ) 
  })
}