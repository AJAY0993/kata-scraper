function commonGround(s1, s2){
// your code here
  const S1 = s1.split(' ')
  const arr =  s2.split(' ').filter(word => S1.includes(word));
  if(arr.length < 1)return "death"
  return [... new Set(arr) ].join(' ')
}