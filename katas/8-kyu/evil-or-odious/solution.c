const char *evil(int value);

const char *evil(int value){
  int n = value;
  int c = 0;
  while (n > 0) {
        int rem = n % 2;
        if(rem == 1){
          c++;
        }
        n = n/2;
    }
  return c%2 == 0 ? "It's Evil!" : "It's Odious!";
}