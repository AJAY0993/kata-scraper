function paul(x){
const obj = {"kata":5,
"Petes kata":10,
"life": 0,
"eating" :1}

const points  = x.reduce((acc,x) => obj[x] + acc , 0)
console.log(points)
return points >= 100 ? 'Miserable!' : points >= 70 ? 'Sad!' : points >= 40 ? 'Happy!' : 'Super happy!'
}