Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

``` javascript
var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
```
``` python
arr1 = [1, 2, 2, 3, 4]
arr2 = [2, 1, 2, 4, 3]
arr3 = [1, 2, 3, 4]
arr4 = [1, 2, 3, "4"]
```

``` javascript
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
```
``` python 
arrays_similar(arr1, arr2) # Should equal true
arrays_similar(arr2, arr3) # Should equal false
arrays_similar(arr3, arr4) # Should equal false
```
