function isPalindrome(x) {
  // your code here
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
}