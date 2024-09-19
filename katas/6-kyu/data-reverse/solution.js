function dataReverse(data) {
  // Your code here
  let arr = []
for (let i = 0; i < data.length; i+=8) {
arr.push(data.slice(i, i + 8))
}
return arr.reverse().flat();
}