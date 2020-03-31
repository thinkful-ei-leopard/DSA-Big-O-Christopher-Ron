function countingSheep(sheep) {
  // base case
  if (sheep <= 0) { // O(1)
    return console.log('All the sheep jumped over the fence');
  }
  
  // general case
  console.log(`${sheep}: Another sheep jumped over the fence`);
  countingSheep(sheep - 1); // O(n)
}
// Worse-case && Avg-case: Linear O(n)
// Best-case: Constant time O(1) -> if sheep is less than or equal to 0

function powerCalculator(base, exponent){
  // base case
  if( exponent < 0){
    return 'exponent should be >= 0';
  }
  if( exponent === 0){
    return base = 1;
  }
  
  return base * powerCalculator(base, exponent -1 );
}