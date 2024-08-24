function p(n){
  
}

function palindrome(num){ 
  //Code goes here
  if(num<0 || Number.isInteger(num) == false){
      return "Not valid";
}
  num = String(num)
  let output =[]
  
  for(i=0;i<num.length;i++){  
    for(j=i+2; j<=num.length; j++){
      let x = [...num].slice(i,j)
      
      if( x.join('') == x.reverse().join('') && x.length > 1 && x[0]!=0){
     output.push(+x.join(''))
   }
      
    }
   
  }
  return output.length > 0 ? [...new Set(output.sort((a,b)=>a-b))] : "No palindromes found"
}