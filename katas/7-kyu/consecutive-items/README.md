You are given a list of unique integers `arr`, and two integers `a` and `b`. Your task is to find out whether or not `a` and `b` appear consecutively in `arr`, and return a boolean value (`True` if `a` and `b` are consecutive, `False` otherwise). 

It is guaranteed that `a` and `b` are both present in `arr`.

~~~if:lambdacalc
### Encodings

purity: `LetRec`  
numEncoding: `BinaryScott`  

export constructors `nil, cons` for your `List` encoding, and deconstructor `if` for your `Boolean` encoding.
~~~