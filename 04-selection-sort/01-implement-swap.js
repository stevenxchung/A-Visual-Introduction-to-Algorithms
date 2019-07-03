// Originally in Java, switch to JavaScript due to formatting issues
let swap = (array, firstIndex, secondIndex) => {
  temp = array[secondIndex];
  array[secondIndex] = array[firstIndex];
  array[firstIndex] = temp;

  return array;
};

// Test
console.log(swap([1, 2, 3, 4], 0, 1));
console.log(swap([1, 2, 3, 4], 3, 2));
