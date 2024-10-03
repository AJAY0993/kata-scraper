var splitInParts = function(s, partLength){
  // Good Luck!
  let begin = 0
  let end = partLength
  let res = ''
  
  while(begin < s.length){
    res+= s.slice(begin, end) + ' '
    begin+= partLength
    end+= partLength
  }
  return res.slice(0,-1)
}