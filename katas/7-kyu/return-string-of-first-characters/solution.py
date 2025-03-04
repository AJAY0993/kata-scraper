import functools

def make_string(s):
    return functools.reduce(lambda a,b: a + b[0], s.split(' '),'')