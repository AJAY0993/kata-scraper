String.prototype.toAlternatingCase = function (s) {
  // Define your method here :)
  return this.split('').map(x=>{
  return  x.toLowerCase() === x ? x.toUpperCase() : x.toLowerCase()
  }).join('')
}