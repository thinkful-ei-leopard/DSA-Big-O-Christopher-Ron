//In this example, we return to the problem of searching using a more sophisticated 
//approach than in naive search, above. Assume that the input array is always sorted. 
//What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) { //O(log(n))
    currentIndex = Math.floor((minIndex + maxIndex) / 2); // O(1)
    currentElement = array[currentIndex]; // O(1)

    if (currentElement < item) { //O(1)
      minIndex = currentIndex + 1; // O(1)
    }
    else if (currentElement > item) { // O(1)
      maxIndex = currentIndex - 1; // O(1)
    }
    else {
      return currentIndex; // O(1)
    }
  }
  return -1; // O(1)
}

// INPUT: [1,2,3] 2        
// Worst-case: O(log(n))
// Avg-case: O(log(n))
// Best-case(super lucky): 0(1) HOLY GRAIL. If [2, 1, 3] 2, the first element in the array matched the item