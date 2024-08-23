function calculator(a,b,sign){
  return sign == "+" || sign == "-" || sign == "*" || sign == "/" ? eval (a + sign + b) : "unknown value";
}