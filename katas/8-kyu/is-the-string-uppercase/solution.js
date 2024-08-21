String.prototype.isUpperCase = function() {
  // your code here
  return this.split("").every(x=>x.toUpperCase()===x)
}