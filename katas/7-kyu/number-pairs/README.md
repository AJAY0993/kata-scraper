In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

#### Example:

```csharp
arr1 = new int[] { 13, 64, 15, 17, 88 };
arr2 = new int[] { 23, 14, 53, 17, 80 };

Kata.getLargerNumbers(arr1, arr2); // Returns {23, 64, 53, 17, 88}
```
```python
arr1 = [13, 64, 15, 17, 88]
arr2 = [23, 14, 53, 17, 80]
get_larger_numbers(arr1, arr2) == [23, 64, 53, 17, 88]
```
```ruby
arr1 = [13, 64, 15, 17, 88]
arr2 = [23, 14, 53, 17, 80]
get_larger_numbers(arr1, arr2) == [23, 64, 53, 17, 88]
```
```javascript
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
```
```coffeescript
arr1 = [13, 64, 15, 17, 88]
arr2 = [23, 14, 53, 17, 80]
getLargerNumbers(arr1, arr2) # Returns [23, 64, 53, 17, 88]
```
```haskell
arr1 = [13, 64, 15, 17, 88]
arr2 = [23, 14, 53, 17, 80]
getLargerNumbers arr1 arr2 == [23, 64, 53, 17, 88]
```
```clojure
(= arr1 [13, 64, 15, 17, 88])
(= arr2 [23, 14, 53, 17, 80])
(= (getLargerNumbers arr1 arr2) [23 64 53 17 88])
```
```cobol
      a = [13, 64, 15, 17, 88]
      b = [23, 14, 53, 17, 80]
      GetLargerNumbers a b => result = [23, 64, 53, 17, 88]
```
```lambdacalc
arr1 = cons 13 (cons 64 (cons 15 (cons 17 (cons 88 nil))))
arr2 = cons 23 (cons 14 (cons 53 (cons 17 (cons 80 nil))))
get-larger-numbers arr1 arr2 -> cons 23 (cons 64 (cons 53 (cons 17 (cons 88 nil))))
```

~~~if:lambdacalc
#### Encodings

purity: `LetRec`  
numEncoding: `Church`  

export constructors `nil, cons` and deconstructor `foldr` for your `List` encoding  
~~~