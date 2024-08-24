function alphabetPosition(text) {
 return  text.split('').filter(x=> x.toLowerCase().charCodeAt(0) > 96 && x.toLowerCase().charCodeAt(0) < 123).map(x=> x.toLowerCase().charCodeAt(0)-96).join(" ")
}