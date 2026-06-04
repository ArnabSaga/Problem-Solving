//* Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

function titleCase(str: string): string {
    const titleCase = str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return titleCase;
}

console.log(titleCase('hello world'));
