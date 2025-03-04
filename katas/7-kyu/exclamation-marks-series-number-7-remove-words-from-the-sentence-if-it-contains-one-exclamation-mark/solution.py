def remove(s):
    s = s.split(" ")
    return " ".join([w for w in s if w.count("!") != 1])