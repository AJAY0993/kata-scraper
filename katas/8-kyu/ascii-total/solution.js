function uniTotal (string) {
// total up dem unicodes!
  return string.split('').reduce((acc,x)=> x.charCodeAt(0)+ acc,0)
}