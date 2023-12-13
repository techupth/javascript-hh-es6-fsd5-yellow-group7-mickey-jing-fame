function sum(...inputArray) {
  // Start coding here !
  console.log(inputArray);
  let sum = inputArray.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  return sum;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
