var factorial = function(n) {
  // Base case: if n = 0, return 1
  if (n === 0) {
    return 1;
  } else {
    // Recursive case: otherwise return factorial(n - 1) multiplied by n
    return factorial(n - 1) * n;
  }
};

// Test
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))