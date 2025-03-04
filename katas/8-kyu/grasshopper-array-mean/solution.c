#include <stddef.h>

double find_average(size_t length, const int nums[length]) {

    //  <----  hajime!
  int sum = 0;
  for(size_t i = 0; i < length; i++){
    sum+= nums[i];
  }
  return (double)sum/length;

}