// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  // Initial conditions
  // The index for the merged array
  k = p;
  // The index for lowHalf array
  i = 0;
  // The index for highHalf array
  j = 0;

  // console.log('low', lowHalf);
  // console.log('high', highHalf);

  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }
  // Once one of lowHalf and highHalf has been fully copied
  //  back into array, copy the remaining elements from the
  //  other temporary array back into the array
  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }
  return array;
};

// Test
console.log(merge([2, 4, 1, 3], 0, 1, 3));
console.log(merge([-99, 1, 2, 3, -1, 0, 4], 0, 3, 6));
console.log(merge([1, 2, 3, 4], 0, 1, 3));
console.log(merge([2], 0, 0, 0));
console.log(merge([], 0, -1, -1));
