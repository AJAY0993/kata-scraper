# Definition 

A **Tidy Number** is a number whose digits are in **non-decreasing order**.

___

# Task 

Given a number, determine if it is tidy or not.

___

# Notes 

* The number passed will always be **positive**.  
* Return the result as a **boolean**.  

~~~if:prolog
* Since prolog doesn't have booleans,  return value should be 1 for (True) or 0 for (false)
~~~

___

# Examples 

```
12 ==> return true
Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).

32 ==> return false
Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).

1024 ==> return false
Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).

13579 ==> return true
Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.

2335 ==> return true
Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).
```

___

### [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

### [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

### [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)
  

ALL translations are welcomed  

Enjoy Learning!!  

Zizou
