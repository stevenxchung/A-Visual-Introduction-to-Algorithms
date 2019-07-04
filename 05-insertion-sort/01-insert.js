// Insert a value before an index in sorted order
var insert = function(array, rightIndex) {
  for (let i = rightIndex; i >= 0; i--) {
    if (array[i + 1] < array[i]) {
      // Swap value with element left of value
      [array[i + 1], array[i]] = [array[i], array[i + 1]];
    }
  }

  return array;
};

// Test
console.log(insert([3, 5, 7, 11, 13, 2, 9, 6], 4));
console.log(insert([2, 3, 5, 7, 11, 13, 9, 6], 5));
console.log(insert([2, 3, 5, 7, 9, 11, 13, 6], 6));
