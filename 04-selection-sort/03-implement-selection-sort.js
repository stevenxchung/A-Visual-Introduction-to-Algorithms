var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    let j = indexOfMinimum(array, i);
    swap(array, i, j);
  }

  return;
};

// Test
console.log(selectionSort([4, 2, 1, 3]));
console.log(selectionSort([4, 3, 2, 1, 0, -1, -99]));
console.log(selectionSort([1, 2, 3, 4]));
console.log(selectionSort([2]));
console.log(selectionSort([]));
