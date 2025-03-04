/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
var splitInteger = function(num, parts) {
  return Array.from({length:parts},()=> Math.ceil(num--/parts) ).reverse()
}