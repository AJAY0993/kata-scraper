A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: `2332, 110011, 54322345`

For a given number ```num```, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

In this kata, <font color="red">single digit numbers</font> and <font color="red">numbers which start or end with zeros</font> (such as `010` and `00`) are **NOT** considered valid numerical palindromes.  

If `num` contains no valid palindromes, return `"No palindromes found"`. 
Otherwise, return `"Not valid"` if the input is not an integer or is less than `0`.


## Examples

```
palindrome(1221)      =>  [22, 1221]
palindrome(34322122)  =>  [22, 212, 343, 22122]
palindrome(1001331)   =>  [33, 1001, 1331]
palindrome(1294)      =>  "No palindromes found"
palindrome("1221")    =>  "Not valid"
```
~~~if:cobol
In COBOL, `num` will always be an integer. Return a table of all numerical palindromes found (empty table if no palindrome was found or `num` is negative).
~~~

---

### Other Kata in this Series:

<a href="https://www.codewars.com/kata/58ba6fece3614ba7c200017f">Numerical Palindrome #1</a>
<br><a href="https://www.codewars.com/kata/numerical-palindrome-number-1-dot-5">Numerical Palindrome #1.5</a>
<br><a href="https://www.codewars.com/kata/58de819eb76cf778fe00005c">Numerical Palindrome #2</a>
<br><a href="https://www.codewars.com/kata/58df62fe95923f7a7f0000cc">Numerical Palindrome #3</a>
<br><b>Numerical Palindrome #3.5</b>
<br><a href="https://www.codewars.com/kata/58df8b4d010a9456140000c7">Numerical Palindrome #4</a>
<br><a href="https://www.codewars.com/kata/numerical-palindrome-number-5-1">Numerical Palindrome #5</a>