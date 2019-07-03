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

// Test
console.log(indexOfMinimum([18, 6, 66, 44, 9, 22, 14, 5], 2));
console.log(
  indexOfMinimum(
    [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      13,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97
    ],
    5
  )
);
