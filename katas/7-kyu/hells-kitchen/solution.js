function gordon(a){
  let vowels = 'EIOU'
return a.toUpperCase().split(' ').map( word => [...word].map(x=> x =='a' || x=='A' ? '@' : vowels.includes(x) ? '*' : x).join('') + '!!!!' ).join(' ')
}