#include <stdbool.h>

bool cube_checker(int v, int s) {

    //  <----  hajime!
  if(v <= 0 || s <= 0){
    return false;
  }
  return v == s*s*s;

}