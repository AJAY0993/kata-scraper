def balanced_num(number):
    int_arr = list(map(int, str(number)))  
    length = len(int_arr)
    
    left_sum = sum(int_arr[:(length // 2) - (1 if length % 2 == 0 else 0)])
    right_sum = sum(int_arr[(length // 2) + 1:])
    
    return "Balanced" if left_sum == right_sum else "Not Balanced"
