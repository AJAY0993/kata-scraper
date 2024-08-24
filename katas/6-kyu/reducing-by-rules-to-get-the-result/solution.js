function reduceByRules(numbers, rules){
  let c = 0;
  return numbers.reduce((acc,x,i) => {
    if(i === 0 )return x
    if(c === rules.length)c = 0;
    const val = rules[c](acc,x)
    c++
    return val
  },0)
}