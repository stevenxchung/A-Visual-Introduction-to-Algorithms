// Swaps two items in an array, changing the original array
// Note: call to swap() does not seem to work?
var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var partition = function(array, p, r) {
  // Compare array[j] with array[r], for j = p, p+1,...r-1
  // maintaining that:
  // array[p..q-1] are values known to be <= to array[r]
  // array[q..j-1] are values known to be > array[r]
  // array[j..r-1] haven't been compared with array[r]
  // If array[j] > array[r], just increment j.
  // If array[j] <= array[r], swap array[j] with array[q],
  // increment q, and increment j.
  // Once all elements in array[p..r-1]
  // have been compared with array[r],
  // swap array[r] with array[q], and return q.
  let pivot = array[r];
  let lowerBound = p;

  for (let i = p + 1; i <= r; i++) {
    // If element is less than pivot, swap element with lower boundary
    if (array[i] < pivot) {
      [array[i], array[lowerBound]] = [array[lowerBound], array[i]];
      lowerBound += 1;
    }
  }
  // Swap pivot with element at the lower bound index, we cannot use the variable 'pivot' or else it will swap with the clone of pivot declared above and not the actual array value
  [array[r], array[lowerBound]] = [array[lowerBound], array[r]];

  return array;
};

// Test
console.log(partition([9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6], 0, 10));
