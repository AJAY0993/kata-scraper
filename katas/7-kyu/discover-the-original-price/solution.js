function discoverOriginalPrice(discountedPrice, salePercentage){
  // ...
  return Number((discountedPrice/(100 - salePercentage) * 100).toFixed(2))
}