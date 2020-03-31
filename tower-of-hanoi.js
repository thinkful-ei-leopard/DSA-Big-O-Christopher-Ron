// THIS WOULD BE VERY HARD if you tried to do all 3 disk at once
// try 1 disk at once, then do 2, then 3

// input: TOH(5, A, C, B)
// OUTPUT: A => C A => B C => B A => C B => A B => C A => C

// 1, 2, 3
// TOH(1, A, C, B)
// start with 1 disk first

// function TOH(n,s,d,temp) { // TOH(1, A, B, C)
//   // base case
//   if(n===1) {
//     print(s,d); // A -> C, A -> B
//   }
//   // 
//   TOH(n - 1, s, temp, d);  // we make "B" our new destination 
//   // make the next steps, go through one step at a time to handle how 1 disk works and 2, then 3
//   //
//   //... TOH(n - 2) ?
//   //...
// }
  

  
// TOH(2, 'A', 'C', 'B');
// test with 5 (the number of disks, 1 + 2 + 3)
// TOH(5, A, C, B);


// function TOH2(source, dest, temp) {

//   print(source, temp); 
//   print(source, dest);
//   print(temp, dest);
// }

// TOH2('A', 'C', 'B');

// function TOH3(source, dest, temp) {
//   TOH2(source, temp, dest);
//   print(source, dest);
//   TOH2(temp, dest, source);
// }


/**
 * 
 * @param {*} n the number of disks 
 * @param {*} s source rod
 * @param {*} d destination rod
 * @param {*} temp the temporary rod
 */
function TOH(n, source, dest, temp) { // O(2^n)
  if (n === 0) { // 0(1)
    return; // 0(1)
  }
  TOH(n - 1, source, temp, dest); // O(x)
  print(source, dest); // 0(1)
  TOH(n - 1, temp, dest, source); // O(x)
}

function print(a,b){
  console.log(`moving ${a} to ${b}`);
}

TOH(3, 'A', 'C', 'B'); // O(2^n)