var edgeList = [[0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5]];

// Fill in this adjMatrix to represent the graph
var adjMatrix = [
  [0, 0, 1, 0, 0, 0], // Edge [0, j]
  [0, 0, 0, 1, 0, 0], // Edge [1, j]
  [0, 0, 0, 1, 1, 0], // Edge [2, j]
  [0, 0, 0, 0, 0, 1], // Edge [3, j]
  [0, 0, 0, 0, 0, 1], // Edge [4, j]
  [0, 0, 0, 0, 0, 0]  // Edge [5, j]
];

// Test
console.log(adjMatrix);
