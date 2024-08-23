function billboard(name, price = 30){
  let totalPrice = 0;
  for(i = 0; i < name.length; i++) totalPrice += price;
  return totalPrice;
} 