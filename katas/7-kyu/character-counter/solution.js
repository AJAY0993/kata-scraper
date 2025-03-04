function validateWord(s)
{
  const arr = s.toLowerCase().split('')
  const map = {}
  arr.forEach(x => { 
                    if(map[x])map[x]++
                    else map[x] = 1
                  })
  const values = Object.values(map)
  console.log(values)
  return values.every(x => x === values[0])
}