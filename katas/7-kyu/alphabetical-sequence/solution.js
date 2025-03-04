function alphaSeq (str) {
    //your code here
 return [... str.toLowerCase()].sort().map(s=> s.toUpperCase() + s.repeat(s.charCodeAt() - 97)).join(',')
}