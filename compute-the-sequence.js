// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) { //O(n)

    if (i === 1) { //O(1)
      result.push(0);  // O(1) or O(n)
    }
    else if (i === 2) { //O(1)
      result.push(1); // O(1) or O(n)
    }
    else {
      result.push(result[i - 2] + result[i - 3]); // O(1) or O(n)
    }
  }
  return result; //O(1)
}

// INPUT: 5

// Worst-case: Linear O(n)
// Avg-case: Linear O(n)
// Best-case: Linear O(n)