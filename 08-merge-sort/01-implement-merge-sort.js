// Takes in an array that has two sorted sub-arrays,
// from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
  // This code has been purposefully obfuscated,
  // as you'll write it yourself in next challenge.
  var a = [],
    b = [],
    c = p,
    d,
    e;
  for (d = 0; c <= q; d++, c++) {
    a[d] = array[c];
  }
  for (e = 0; c <= r; e++, c++) {
    b[e] = array[c];
  }
  c = p;
  for (e = d = 0; d < a.length && e < b.length; ) {
    if (a[d] < b[e]) {
      array[c] = a[d];
      d++;
    } else {
      array[c] = b[e];
      e++;
    }
    c++;
  }
  for (; d < a.length; ) {
    array[c] = a[d];
    d++;
    c++;
  }
  for (; e < b.length; ) {
    array[c] = b[e];
    e++;
    c++;
  }
};

// Takes in an array and recursively merge sorts it
// Set default values for mergeSort()
var mergeSort = function(array, p = 0, r = array.length - 1) {
  // If sub-array is not size 0 or 1, sort
  if (r > p) {
    var q = Math.floor((p + r) / 2);
    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }

  return array;
};

// Test
console.log(mergeSort([4, 2, 1, 3]));
console.log(mergeSort([4, 3, 2, 1, 0, -1, -99]));
console.log(mergeSort([1, 2, 3, 4]));
console.log(mergeSort([2]));
console.log(mergeSort([]));
