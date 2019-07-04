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
