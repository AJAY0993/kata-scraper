from random import randint

def random_case(x):
    output = ''
    for i in x:
        if randint(0,1) == 0:
            output+= i.upper()
        else:
            output+= i.lower()
    return output