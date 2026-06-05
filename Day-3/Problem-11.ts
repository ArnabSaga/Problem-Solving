//* Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

function sumArray(arr: number[]): number {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(`Sum of [1, 2, 3, 4, 5] is:`, sumArray([1, 2, 3, 4, 5]));
console.log(`Sum of [10, -5, 10] is:`, sumArray([10, -5, 10]));
