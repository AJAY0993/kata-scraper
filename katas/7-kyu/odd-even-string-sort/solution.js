function sortMyString(S) {
    // your code here
    let even = ''
    let odd = ''
    Array.from(S).forEach((x,i)=>{
      if(i%2)odd+= x
      else even+= x
    })
    return `${even} ${odd}`
}