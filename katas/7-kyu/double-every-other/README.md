Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

```javascript
[1,2,3,4]
```

the function should return :

```javascript
[1,4,3,8]
```

~~~if:lambdacalc
Encodings:

purity: `LetRec`  
numEncoding: `BinaryScott`  

export constructors `nil, cons` and deconstructor `foldr` for your `List` encoding
~~~