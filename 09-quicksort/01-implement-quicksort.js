// This function partitions given array and returns
//  the index of the pivot.
var partition = function(array, p, r) {
  // This code has been purposefully obfuscated,
  // as you will implement it yourself in next challenge
  var e = array,
    t = p,
    n = r;
  var r = function(e, t, n) {
    var r = e[t];
    e[t] = e[n];
    e[n] = r;
  };
  var i = t;
  for (var s = t; s < n; s++) {
    if (e[s] <= e[n]) {
      r(e, s, i);
      i++;
    }
  }
  r(e, n, i);
  return i;
};

var quickSort = function(array, p, r) {
  if (r > p) {
    let pivot = partition(array, p, r);
    quickSort(array, p, pivot - 1);
    quickSort(array, pivot, r);
  }
  return array;
};

// Test
console.log(quickSort([4, 2, 1, 3], 0, 3));
console.log(quickSort([4, 3, 2, 1, 0, -1, -99], 0, 6));
console.log(quickSort([1, 2, 3, 4], 0, 3));
console.log(quickSort([2], 0, 0));
console.log(quickSort([], 0, -1));
