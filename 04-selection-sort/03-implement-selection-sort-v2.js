// This is an alternate version of the selection sort, since code runner and chrome console could not run the previous version

// Swaps elements
// let swap = (firstElement, secondElement) => {
//   [firstElement, secondElement] = [secondElement, firstElement];
// };

let selectionSort = array => {
  // Initialize minimum
  let min = 0;
  // Goes through entire array
  for (let i = 0; i < array.length; i++) {
    // Loop to compare all other values
    for (let j = i + 1; j < array.length; j++) {
      // Find minimum in array
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

// Test
console.log(selectionSort([4, 2, 1, 3]));
console.log(selectionSort([4, 3, 2, 1, 0, -1, -99]));
console.log(selectionSort([1, 2, 3, 4]));
console.log(selectionSort([2]));
console.log(selectionSort([]));
