function gettingMad(array) {
    // return the minimum absolute differnce
    let arr = []
    for(i=0;i<array.length; i++){
      for(j=i+1;j<array.length;j++){
        arr.push(Math.abs(array[i]-array[j]))
      }
    }
  return Math.min(...arr)
}