function getMean(arr, x, y) {
  
  
if(x<2 || y<2 || x>arr.length || y> arr.length){return -1}
  
let arrX = arr.slice(0,x)
let arrY = arr.slice(-y)

return (arrX.reduce( (acc,x) => acc+x, 0)/arrX.length  + arrY.reduce( (acc,x) => acc+x, 0)/arrY.length)/2

}