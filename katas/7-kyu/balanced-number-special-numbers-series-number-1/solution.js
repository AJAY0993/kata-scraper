function balancedNum(number)
{
let intArr = Array.from(String(number),num=>+num)
return intArr.slice(0, Math.ceil(intArr.length/2)-1).reduce((acc,x)=>acc+x,0) === intArr.slice(Math.floor(intArr.length/2 +1)).reduce((acc,x)=>acc+x,0) ? "Balanced" : "Not Balanced" 
}