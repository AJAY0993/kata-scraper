function password(str) {
    //validate password
  let condition1 = str.length >= 8 
  let condition2 = [...str].some(x => Number.isInteger(+x))
  let condition3 = [...str].some(x => x.charCodeAt() >= 97 &&  x.charCodeAt() <= 122)
  let condition4 = [...str].some(x => x.charCodeAt() >= 65 &&  x.charCodeAt() <= 90)
  
  return condition1 && condition2 && condition3 && condition4
}
