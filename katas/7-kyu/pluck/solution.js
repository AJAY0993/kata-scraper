function pluck(objs, name) {
return objs.reduce((t,x)=>{
  t.push(x[name])
  return t
},[])
}