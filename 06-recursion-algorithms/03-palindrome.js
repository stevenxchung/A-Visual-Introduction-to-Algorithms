var isPalindrome = function(str) {
  // Base case #1 if string is empty or one letter, declare palindrome
  if (str === '' || str.length === 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    // Base case #2 if first and last letter differ, string is not palindrome
    return false;
  } else {
    // Recursive case: otherwise, first and last letters are the same, strip them from the string
    return isPalindrome(str.slice(1, -1));
  }
};

// True
console.log(isPalindrome('motor'));
console.log(isPalindrome('rotor'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('foobar'));
