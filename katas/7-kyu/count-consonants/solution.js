function consonantCount(str) {
  // ...
  let c = 0
  const vowels = {
  'a':true,
  'e':true,
  'i':true,
  'o':true,
  'u':true,
  }
  str = str.toLowerCase()
  for(const s of str){
    if(!vowels[s] && s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122){
      c++
    }
  }
  return c
}