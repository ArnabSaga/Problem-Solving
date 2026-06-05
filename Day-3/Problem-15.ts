//* Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().

function chunkArray(arr: number[], size: number): number[][] {
    const chunkedArr: number[][] = [];
    
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
}
console.log(`[1, 2, 3, 4, 5] chunked by 2:`, chunkArray([1, 2, 3, 4, 5], 2));
