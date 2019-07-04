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

