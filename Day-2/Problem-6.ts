//* Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

function reverseString(str: string): string {
    const reverseString = str.split('').reverse().join('');
    return reverseString;
}

console.log(reverseString('hello'));
