function counterEffect(hitCount) {
 //do your thing
 return Array.from(hitCount).map(x=>{
    let arr = []
    let c = 0
while(c <= +x){
  arr.push(c)
  c++
}
    return arr
  })
}