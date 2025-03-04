def swap(st):
    #your code here
    trans = str.maketrans('aeiou','AEIOU')
    return st.translate(trans)