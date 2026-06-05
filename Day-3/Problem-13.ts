//* Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

function removeDuplicates(arr: number[]): number[] {
    const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
    return uniqueArr;
}
console.log(`[1, 2, 2, 3, 3, 4] without duplicates:`, removeDuplicates([1, 2, 2, 3, 3, 4]));
