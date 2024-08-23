function houseOfCards(n) { 
  //good luck!
  if(n < 1 || !Number.isInteger(n)) throw new Error('Error')
  const floors = n/2*(1+n)
  return (4 + 2*n)*(n+1)/2 + floors
}