from math import floor
def gps(s, x):
    # your code here, good luck!
    if len(x) <= 1:
        return 0
    max_speed = 0;
    for i in range(1, len(x)):
        dis = x[i] - x[i - 1]
        speed = (3600 * dis) / s
        if max_speed < speed:
            max_speed = speed
    return floor(max_speed)