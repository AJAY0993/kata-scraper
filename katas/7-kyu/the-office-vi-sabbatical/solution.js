function sabb(s, val, happiness){
  const sabbatical = 'sabbatical'
  const sabbaticalSum = [...s].reduce((sum,x)=> {
    sabbatical.includes(x) ? sum++ : sum+= 0;
    return sum
  },0)
  return sabbaticalSum + val + happiness > 22 ? 'Sabbatical! Boom!' :  'Back to your desk, boy.'
}