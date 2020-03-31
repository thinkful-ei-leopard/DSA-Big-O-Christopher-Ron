// What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) { // O(n)
    const el1 = arr1[i]; // O(1)
    for (let j = 0; j < arr2.length; j++) { // O(n^2)   (or would I note it as O(n) here and then determine its O(n^2) by looking at it?)
      const el2 = arr2[j]; // O(1)
      if (el1 === el2) return true; // O(1)
    }
  }
  return false; // O(1)
}
   1        2
[1,2,3], [0,5,2]    3^2
 1 2 3    1 2 3
 // TRUTH TABLE!
0   1      2      3          
1 false  false  false
2 false  false  true
3 false  false  false


// Worst-case: Polynomial Time O(n^2)

// Average-case: Polynomial Time O(n^2)

// Best-case: Constant time O(1) If both cases were EXACTLY the same and assuming the arrays are both size 1
//            so arr1=[1], arr2=[1]
//         OR could still be Polynomial?  
//    What do they mean by "Best-case" truly?