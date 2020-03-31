//What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)]; // O(1)
}

// INPUT: [1,2,3]

// Worst-case && Avg-case && Best-case: Constant time O(1)   HOLY GRAIL