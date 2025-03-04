#include <stdio.h>
#include <string.h>
char *integrate(int coefficient, int exponent) {

    //  <----  hajime!
  int new_exp = exponent + 1;
  int new_coff = coefficient / new_exp;
  
  char *output = malloc(50);
  
  // conversion 
  sprintf(output, "%dx^%d", new_coff, new_exp);
  
  // Concat
  return output;
}