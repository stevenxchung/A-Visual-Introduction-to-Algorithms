/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  while (max >= min) {
    var guess = Math.floor((min + max) / 2);
    if (array[guess] < targetValue) {
      min = guess + 1;
    } else if (array[guess] > targetValue) {
      max = guess - 1;
    } else {
      return guess;
    }
  }

  return -1;
};

// Test
console.log(doSearch(
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
    53,
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
  73
));
console.log(doSearch([22, 44, 66, 88], 88));
console.log(doSearch([99, 100], 101));
