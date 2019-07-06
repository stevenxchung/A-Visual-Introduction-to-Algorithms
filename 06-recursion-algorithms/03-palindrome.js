var isPalindrome = function(str) {
  // base case #1 if string is empty or one letter, declare palindrome
  if (str === '' || str.length === 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    // base case #2 if first and last letter differ, string is not palindrome
    return false;
  } else {
    // recursive case: otherwise, first and last letters are the same, strip them from the string
    return isPalindrome(str.slice(1, -1));
  }
};
