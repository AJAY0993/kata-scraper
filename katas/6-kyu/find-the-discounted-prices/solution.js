function findDiscounted(prices){
  //your code here
  if(!prices)return''
  prices = prices.split(' ').map(Number)
  const result = []
  const map = {}
  for(const price of prices){
    if(!map[price]){
      map[price] = 0
    }
    map[price]+= 1
  }
  for(const price of prices){
    const discounted = parseInt(price * 0.75)
    if(map[discounted]){
      map[discounted]-= 1
      map[price]-= 1
      result.push(discounted)
    }
  }
  return result.join(' ')
}