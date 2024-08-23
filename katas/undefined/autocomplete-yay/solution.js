function autocomplete(input, dictionary){
  input  = input.toLowerCase().split('').map(x=> x.charCodeAt() < 97 || x.charCodeAt() > 123 ? '' : x).join('')
  return dictionary.map((word,i) => word.toLowerCase().startsWith(input) ? word : '' ).filter(word=> word !== '').slice(0,5)
}