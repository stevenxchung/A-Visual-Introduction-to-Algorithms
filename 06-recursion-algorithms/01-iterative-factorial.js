var factorial = function(n) {
  var result = 1;

  for (i = 1; i <= n; i++) {
    result = result * i
  }
  
  return result;
};

// Test
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))