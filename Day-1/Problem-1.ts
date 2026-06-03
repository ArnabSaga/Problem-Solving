//* Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10 Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

function swapValue(a: number, b: number): [number, number] {
  [a, b] = [b, a];
  return [a, b];
}

console.log(swapValue(5, 10));
