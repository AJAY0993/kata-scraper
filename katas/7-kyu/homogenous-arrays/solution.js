function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  return arrays.filter(a => a.length > 0).filter(a=> a.every(x => typeof(x)== typeof(a[0])));
}