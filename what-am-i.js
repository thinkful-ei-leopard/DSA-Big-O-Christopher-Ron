// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
// This function checks if a number is prime
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {  //O(1)
    return false;
  }
  for (let i = 2; i < n; ++i) { //O(n) 
    // since its ++i, if the number was 2, the best case is O(1)
    if (n % i === 0) return false;
  }
  return true; //O(1)
}

// INPUT:  7 or 2
// Worst-case: Linear O(n)
// Avg-Case: Liner O(n)
// Best-case: Constant O(1)  If input was 2