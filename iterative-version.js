// 1. counting sheep

function countingSheep(num) {
  for(let i = num; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}

//countingSheep(5);

// 2. Power calculator
/**
 * 
 * @param {number} base INTEGER
 * @param {number} exponent INTEGER
 */

function powerCalculator(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  if(exponent < 0) {
    return console.log('exponent should be >= 0');
  }
  console.log(result);
}

powerCalculator(10, 5);