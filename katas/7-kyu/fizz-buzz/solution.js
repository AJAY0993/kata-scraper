// Return an array
function fizzbuzz(n)
{
return Array.from({length:n},((x,i)=>{
  let j = i+1
  if( j%3 ===0 && j%5 ===0)return "FizzBuzz"
  if(j%3 === 0 ) return "Fizz"
  if(j%5 === 0 )return "Buzz"
  return j
}   ) )
}
