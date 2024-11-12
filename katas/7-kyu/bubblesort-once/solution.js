function bubblesortOnce(arr) {
  // TODO
  const a = [...arr]
  for(let [i,j] = [0,1]; j < a.length; i++,j++ ){
    if(a[j] < a[i]){
      [a[i], a[j]] = [a[j], a[i]]
    }
  }
  return a
}