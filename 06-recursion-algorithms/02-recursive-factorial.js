var factorial = function(n) {
  // base case: if n = 0, return 1
  if (n === 0) {
    return 1;
  } else {
    // recursive case: otherwise return factorial(n - 1) multiplied by n
    return factorial(n - 1) * n;
  }
};
