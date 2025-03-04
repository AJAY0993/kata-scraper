//returned string should be statically allocated, it will not be freed
#include <stdio.h>
#include <math.h>
#include <string.h>

const char *disariumNumber(int number)
{
    char str[50];
    sprintf(str, "%d", number);
    int len = strlen(str);
    int sum = 0;
    for(int i = 0; i < len; i++){
      int n = str[i] - '0';
      sum+= pow(n, i + 1);
    }
  
    return sum == number ? "Disarium !!" : "Not !!";
}