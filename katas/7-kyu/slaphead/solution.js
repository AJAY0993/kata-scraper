function bald(x){
const s = x.replaceAll('/','-')
const hairs = [...x].filter(x => x ==='/').length

const msg = hairs === 0 ? "Clean!":
 hairs === 1 ? "Unicorn!":
 hairs === 2 ? "Homer!":
 hairs>=3 && hairs<=5 ? "Careless!":
 "Hobo!"
  
  return [s,msg]
}