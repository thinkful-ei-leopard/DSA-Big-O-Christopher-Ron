// What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
  let ticks = 0;
  if (value % 2 === 0) {  // O(1)
    ticks++;
    return {result: true, ticks};  // O(1)
  }
  else {
    ticks++;
    return {result: false, ticks};  // O(1)
  }

}

// Worst-case: Constant time O(1)
console.log(isEven(15555555555554));
console.log(isEven(15555555555555));
// Average-case: Constant time O(1)
console.log(isEven(155));
// Best-case: Constant time O(1)
console.log(isEven(5));