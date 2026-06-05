//* Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

function flattenArray(arr: (number | number[])[]): number[] {
    const flatArr = arr.reduce((a: number[], b: number | number[]) => a.concat(b), []);
    return flatArr;
}
console.log(`[1, [2, 3], [4, 5]] flattened:`, flattenArray([1, [2, 3], [4, 5]]));
