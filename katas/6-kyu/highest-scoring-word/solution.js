function high(x){
  let arr = x.split(' ').map(x=>x.split('').reduce((t,x)=>t+x.charCodeAt(0)-96,0))  
  let index =  arr.indexOf(Math.max(... arr) )

    return x.split(' ')[index]
}
