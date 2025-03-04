#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <limits.h>

size_t count_min_rotations (size_t n_dice, const uint8_t dice[n_dice])
{
  size_t min = n_dice*2;
  for(size_t i = 1; i<=6; i++){
    size_t turns = 0;
    
    for(size_t j = 0; j < n_dice; j++){
      turns += (dice[j] != i) + (dice[j] + i == 7);
    }
    
    if(turns < min){
      min = turns;
    }
    
  }
  return min;
}