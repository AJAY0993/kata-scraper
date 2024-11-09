## Task

Write a function that takes a string and finds a repeating character in the string (there may be multiple repeating characters). The function should return the minimum difference between the indices of these characters, and the character itself.

> For example, in the string `"aabcba"`, the minimum position difference of repeated characters will be equal to `1`, since for the character `a`, the position difference is `1`.

<!-- bad datatype design: it's a tuple. not all languages have native tuples, so the tuple may be _encoded_ as an array. -->
~~~if-not:haskell,
The output should be in the form of an array.
~~~
~~~if:haskell,
The output should be a `Maybe (Int,Char)`
~~~

- If there are no duplicate characters in the string, it should return null.

- The string can only contain lowercase letters, and nothing else!!! (an empty string is not allowed).

- If the difference between repeated characters is the same, return the first minimal difference encountered.

Examples of outputs:

```java
"aa" => new Object[]{1, 'a'}

"aabbca" => new Object[]{1, 'a'}

"abka" => new Object[]{3, 'a'}

"abcded" => new Object[]{2, 'd'}

"abbbbbc" => new Object[]{1, 'b'}

"abc" => null
```
```python
"aa" -> (1, 'a')

"aabbca" -> (1, 'a')

"abka" -> (3, 'a')

"abcded" -> (2, 'd')

"abbbbbc" -> (1, 'b')

"abc" => None
```
```dart
"aa" -> [1, 'a']

"aabbca" -> [1, 'a']

"abka" -> [3, 'a']

"abcded" -> [2, 'd']

"abbbbbc" -> [1, 'b']

"abc" => null
```
```haskell
"aa"       ->  Just (1, 'a')
"aabbca"   ->  Just (1, 'a')
"abka"     ->  Just (3, 'a')
"abcded"   ->  Just (2, 'd')
"abbbbbc"  ->  Just (1, 'b')
"abc"      ->  Nothing
```