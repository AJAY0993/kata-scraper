int no_boring_zeros(int num) {
  //  <----  hajime!
  if (num == 0) return 0;
  int n = num;
  while(n%10 == 0){
    n = n/10;
  }
  return n;
}