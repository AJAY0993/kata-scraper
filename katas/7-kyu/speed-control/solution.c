#include <stdio.h>
int gps(int s, const double x[/*x_len*/], int x_len) {
    if(x_len <= 1){
      return 0;
    }
    int max = 0;
    for(int i = 1; i < x_len; i++){
        double dis = x[i] - x[i - 1];
        double speed = (3600 * dis)/s;
        if(speed > max){
            max = speed;
        }
    }
    return (int)max;
}