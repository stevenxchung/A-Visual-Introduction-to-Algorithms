var indexOfMinimum = function(array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  var minValue = array[startIndex];
  var minIndex = startIndex;

  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:
  for (let i = startIndex; i < array.length; i++) {
    if (minValue > array[i]) {
      minIndex = i;
    }
  }

  return minIndex;
};
