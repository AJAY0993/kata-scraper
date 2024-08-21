function oddOrEven(array) {
   //enter code here
 return array.reduce((t,x)=>t+x,0)%2 ? "odd" : "even"
}