// Originally in Java, switch to JavaScript due to formatting issues
let swap = (array, firstIndex, secondIndex) => {
  temp = array[secondIndex];
  array[secondIndex] = array[firstIndex];
  array[firstIndex] = temp;

  return array;
};
