//* Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

function findMax(arr: number[]): number {
    const maxElement = arr.reduce((a, b) => a > b ? a : b, 0);
    return maxElement;
}
console.log(`Max element in [3, 1, 7, 2, 9] is:`, findMax([3, 1, 7, 2, 9]));
console.log(`Max element in [10, -5, 10] is:`, findMax([10, -5, 10]));
