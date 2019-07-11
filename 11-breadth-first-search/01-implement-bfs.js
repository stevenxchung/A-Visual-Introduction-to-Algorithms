/* A Queue object for queue-like functionality over JavaScript arrays. */
var Queue = function() {
  this.items = [];
};
Queue.prototype.enqueue = function(obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function() {
  return this.items.shift();
};
Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distanc _, predecessor: _ }]
 */
var doBFS = function(graph, source) {
  var bfsInfo = [];

  for (var i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }

  bfsInfo[source].distance = 0;

  var queue = new Queue();
  queue.enqueue(source);

  // Traverse the graph

  // As long as the queue is not empty:
  while (!queue.isEmpty()) {
    // Repeatedly dequeue a vertex u from the queue.
    let vertex = queue.dequeue();
    // For each neighbor v of u that has not been visited:
    for (let u = 0; u < graph[vertex].length; u++) {
      let neighbor = graph[vertex][u];
      if (bfsInfo[neighbor].distance === null) {
        // Set distance to 1 greater than u's distance
        bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
        // Set predecessor to u
        bfsInfo[neighbor].predecessor = vertex;
        // Enqueue v
        queue.enqueue(neighbor);
      }
    }
  }

  //  Hint:
  //  use graph to get the neighbors,
  //  use bfsInfo for distances and predecessors

  return bfsInfo;
};
