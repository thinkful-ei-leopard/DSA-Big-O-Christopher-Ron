// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {  // O(n)
    array[i] *= 2; // O(1)
  }
  return array;
}

// INPUT: [1, 2, 3, 4]

// Worst-case: Linear O(n)

// Avg-case: Linear O(n)

// Best-case: Linear O(n)