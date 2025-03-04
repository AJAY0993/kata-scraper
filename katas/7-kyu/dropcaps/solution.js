function dropCap(n) {
let arr = n.split(' ');
return arr.map(x=> x.length > 2 ? x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() : x).join(' ')
}