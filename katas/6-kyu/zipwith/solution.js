function zipWith(fn, a0, a1) {
  let arr = a0.length > a1.length ? a1 : a0
  return arr.map((x,i)=> fn(a0[i],a1[i]))
}
