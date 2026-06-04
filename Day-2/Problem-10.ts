//* Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.

function countChar(str: string, char: string): number {
    const countChar = str.split(char).length - 1;
    return countChar;
}

console.log(countChar('banana', 'a'));
