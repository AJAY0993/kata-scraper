function solution(fullText, searchText){
  let data = ''
  let i = 0
  let c = 0
  while(i < fullText.length){
    data+= fullText[i]
    if(data.search(searchText) !== -1){
      data = ''
      c++
    }
    i++
  }
  return c
}