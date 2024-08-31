def can_snail_reach_end(length, speed, length_increases):
    #code
    t = 365 * 24 * 60
    total_length = length + t * length_increases
    return speed * t > total_length
