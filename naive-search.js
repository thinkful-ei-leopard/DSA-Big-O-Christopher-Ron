// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) { // O(n)
    if (array[i] === item) { // O(1)
      return i;  // O(1)
    }
  }
}

// INPUT: [1, 2, 3, 4] item=2

// Worst-case && Avg-case && Best-case: Linear O(n)
