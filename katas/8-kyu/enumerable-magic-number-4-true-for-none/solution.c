#include <stdbool.h>
#include <stddef.h>

typedef bool (*Predicate)(int);

bool none(const int* arr, size_t size, Predicate fun)
{ 
    if(sizeof(arr) == 0) return true;
    for(int i = 0; i < size; i++){
      if(fun(arr[i]) != false){
        return false;
      }
    }
    return true;
}