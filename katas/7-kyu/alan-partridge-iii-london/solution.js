function alan(x){
const obj = {"Rejection":true,
"Disappointment":true,
"Backstabbing Central" : true,
"Shattered Dreams Parkway" : true}
x.forEach(x => delete obj[x])
  
  for(i in obj){
    return "No, seriously, run. You will miss it."
  }
  return "Smell my cheese you mother!"
}