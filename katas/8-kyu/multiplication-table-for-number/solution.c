#include <stdlib.h>
#include <string.h>

char *multi_table(int num)
{
  char *output = (char *)malloc(200);
    for(int i = 1; i <= 10; i++){
      char line[20];
      sprintf(line, "%d * %d = %d", i, num, i * num);
      strcat(output, line);
      if(i != 10){
        strcat(output, "\n");
      }
    }
  return output;
}