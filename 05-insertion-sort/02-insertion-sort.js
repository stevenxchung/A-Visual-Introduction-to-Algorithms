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
