// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {  //O(n)
    for(let j = i + 1; j < arr.length; j++) { //O(n^2)
      console.log(arr[i] + ", " +  arr[j] ); //O(1)
    }
  }
}

// INPUT: [1,2,3,4]

// Worst-case && Avg-case && best-case: Polynomial O(n^2)             