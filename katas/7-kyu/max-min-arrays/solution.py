def solve(arr):
    out = []
    s = sorted(arr, reverse=True)
    i,j = 0, len(arr) - 1
    while i < j:
        out.append(s[i])
        out.append(s[j])
        i+= 1;
        j-= 1
    if i == j:
        out.append(s[i])
    return out
        
        
        