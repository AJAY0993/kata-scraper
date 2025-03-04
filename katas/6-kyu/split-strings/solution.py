def solution(str):
    a = []
    for i in range(0, len(str), 2):
        try:
            s = str[i] + str[i + 1]
            a.append(s)
        except IndexError:
            s = str[i] + '_'   
            a.append(s)
    return a