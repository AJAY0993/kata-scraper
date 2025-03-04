function minimumNumber(numbers){
  //your code here
  let sum = numbers.reduce((t,x)=>t+x,0);
  let result;
  let initial = sum;
  while(!result){
      result = true;
//       if(sum<2)result = false;
      for(i=2; i <= Math.sqrt(sum); i++){
      if(sum%i === 0) result = false
    }
      sum++;
  }
  return --sum - initial
}