def jumping_number(n):
    str_n = str(n)
    if len(str_n) == 1:
        return "Jumping!!"
    return "Jumping!!" if all(abs(int(str_n[i]) - int(str_n[i + 1])) == 1 for i in range(len(str_n) - 1)) else "Not!!"