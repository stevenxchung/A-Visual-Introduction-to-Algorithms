var solveHanoi = function(numDisks, fromPeg, toPeg) {
  // Base case: no disks to move
  if (numDisks === 0) {
    return true;
  } 
  // Recursive case
  let sparePeg = getSparePeg(fromPeg, toPeg);
  solveHanoi(numDisks - 1, fromPeg, sparePeg);
  moveDisk(fromPeg, toPeg);
  solveHanoi(numDisks - 1, sparePeg, toPeg);
};
