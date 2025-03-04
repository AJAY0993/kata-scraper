function calculateString(st){
    //..
  let goodStr = '1234567890+-*/.'
   return eval(st.split('').filter(x => goodStr.includes(x)).join('') ).toFixed(0)
}