The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!
~~~if-not:cpp
Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
~~~
~~~if:cpp
Challenge: You are given a vector of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
~~~
```python
odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```julia
odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```php
odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```ruby
odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```crystal
odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```elixir
odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```javascript
oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```typescript
oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```dart
oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
```
```reason
oddOnesOut([| 1, 2, 3, 1, 3, 3 |]) = [| 1, 1 |]
```
```haskell
oddOnesOut [1, 2, 3, 1, 3, 3] = [1, 1]
```
```r
oddOnesOut(c(1, 2, 3, 1, 3, 3)) = c(1, 1)
```
```racket
(odd-ones-out '(1 2 3 1 3 3)) ; '(1 1)
```
```factor
{ 1 2 3 1 3 3 } odd-ones-out ! { 1 1 }
```
```cpp
oddOnesOut({1, 2, 3, 1, 3, 3}) = {1, 1}
```
In the above example:
- the number 1 appears twice
- the number 2 appears once
- the number 3 appears three times

`2` and `3` both appear an odd number of times, so they are removed from the list. The final result is: `[1,1]`

Here are more examples:
```cpp
oddOnesOut({1, 1, 2, 2, 3, 3, 3}) = {1, 1, 2, 2}
oddOnesOut({26, 23, 24, 17, 23, 24, 23, 26}) = {26, 24, 24, 26}
oddOnesOut({1, 2, 3}) = {}
oddOnesOut({1}) = {}
```
```python
odd_ones_out([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
odd_ones_out([1, 2, 3]) = []
odd_ones_out([1]) = []
```
```ruby
odd_ones_out([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
odd_ones_out([1, 2, 3]) = []
odd_ones_out([1]) = []
```
```elixir
odd_ones_out([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
odd_ones_out([1, 2, 3]) = []
odd_ones_out([1]) = []
```
```crystal
odd_ones_out([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
odd_ones_out([1, 2, 3]) = []
odd_ones_out([1]) = []
```
```julia
odd_ones_out([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
odd_ones_out([1, 2, 3]) = []
odd_ones_out([1]) = []
```
```php
odd_ones_out([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
odd_ones_out([1, 2, 3]) = []
odd_ones_out([1]) = []
```
```javascript
oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []
```
```reason
oddOnesOut([| 1, 1, 2, 2, 3, 3, 3 |]) = [| 1, 1, 2, 2 |]
oddOnesOut([| 26, 23, 24, 17, 23, 24, 23, 26 |]) = [| 26, 24, 24, 26 |]
oddOnesOut([| 1, 2, 3 |]) = [| |]
oddOnesOut([| 1 |]) = [| |]
```
```typescript
oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []
```
```dart
oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []
```
```haskell
oddOnesOut [1, 1, 2, 2, 3, 3, 3] = [1, 1, 2, 2]
oddOnesOut [26, 23, 24, 17, 23, 24, 23, 26] = [26, 24, 24, 26]
oddOnesOut [1, 2, 3] = []
oddOnesOut [1] = []
```
```r
oddOnesOut(c(1, 1, 2, 2, 3, 3, 3)) = c(1, 1, 2, 2)
oddOnesOut(c(26, 23, 24, 17, 23, 24, 23, 26)) = c(26, 24, 24, 26)
oddOnesOut(c(1, 2, 3)) = c()
oddOnesOut(c(1)) = c()
```
```racket
(odd-ones-out '(1 1 2 2 3 3 3)) ; '(1 1 2 2)
(odd-ones-out '(26 23 24 17 23 24 23 26)) ; '(26 24 24 26)
(odd-ones-out '(1 2 3)) ; '()
(odd-ones-out '(1)) ; '()
```
```factor
{ 1 1 2 2 3 3 3 } odd-ones-out ! { 1 1 2 2 }
{ 26 23 24 17 23 24 23 26 } odd-ones-out ! { 26 24 24 26 }
{ 1 2 3 } odd-ones-out ! { }
{ 1 } odd-ones-out ! { }
```

Are you up to the challenge?
