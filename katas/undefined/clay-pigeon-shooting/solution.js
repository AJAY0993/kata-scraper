function shoot(arr){
const peteScore = arr.reduce((t,x)=>{let score = x[0]['P1'].split('')
let inc = x[1] ? 2 : 1
score.forEach(word => word == 'X' ? t+= inc : t+= 0)
return t},0)
const philScore = arr.reduce((t,x)=>{let score = x[0]['P2'].split('')
let inc = x[1] ? 2 : 1
score.forEach(word => word == 'X' ? t+= inc : t+= 0)
return t},0)
if( peteScore > philScore )return 'Pete Wins!'
  if( peteScore < philScore )return 'Phil Wins!'
      return 'Draw!'
}

