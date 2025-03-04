function mango(quantity, price){
  const threes = Math.floor(quantity / 3);
  
  return threes * 2 * price + (quantity - (threes*3)) * price;
}