def count_duplicates(name,age,height):
    # your code here
    s = set()
    for i in range(len(name)):
        s.add((name[i], age[i], height[i]))
    return len(name) - len(s)