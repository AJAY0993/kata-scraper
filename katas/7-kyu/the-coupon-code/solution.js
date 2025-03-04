function checkCoupon(enteredCode, correctCode, currentDateVal, expirationDateVal){
  if(enteredCode !== correctCode){
     return false}
  else{
    const currentDate = new Date(currentDateVal);
    const expiringDate = new Date(expirationDateVal)
    if(   currentDate.getFullYear() > expiringDate.getFullYear() ){return false}
   else if( currentDate.getFullYear() === expiringDate.getFullYear()  && currentDate.getMonth() > expiringDate.getMonth() ){return false}
   else if( currentDate.getFullYear() === expiringDate.getFullYear()  && currentDate.getMonth() === expiringDate.getMonth() && currentDate.getDate() > expiringDate.getDate() ){return false}
    else{return true}
  }
}
