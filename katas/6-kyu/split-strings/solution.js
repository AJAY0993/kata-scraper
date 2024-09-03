function solution(str){
   const arr = []
   for(let i = 0; i < str.length; i+= 2){
     const s = str[i] + (str[i + 1] || '_')
     arr.push(s)
   }
   return arr
}