var insertionSort = function(array) {
  for (let i = array.length; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] < array[j]) {
        // Swap value with element left of value
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

// Test
console.log(insertionSort([4, 2, 1, 3]));
console.log(insertionSort([4, 3, 2, 1, 0, -1, -99]));
console.log(insertionSort([1, 2, 3, 4]));
console.log(insertionSort([2]));
console.log(insertionSort([]));
