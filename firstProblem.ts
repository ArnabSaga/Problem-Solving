//* Problem - 1 => Task: Write a function that takes a string and returns it reversed.

function reversString(str: string) {
  // Check the length of the string
  if (str.length > 1000) {
    return "String is too long";
  }

  // Reverse the string operation
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

//* Problem - 2 => Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

function fizzBuzz(n: number) {
  let result = [];

  // FizzBuzz operation
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzz(50));

//* Problem - 3 => Task: Given an array of integers, return the largest value.

function findLargest(arr: number[]) {
  // if the element is shorter then it will work fine
  return Math.max(...arr);
}

function findLargestSafe(arr: number[]) {
  // Initialize with the first element
  let largest = arr[0];

  // Loop through the rest of the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update if it finds a bigger number
    }
  }

  return largest;
}

console.log(findLargestSafe([10, 20, 30, 40, 50]));

//* Problem - 4 => Task: Determine if a word reads the same forward and backward.

function isPalindrome(str: string) {
  const lowerStr = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));

function isPalindromeTwoPointer(str: string) {
  const cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));

//* Problem - 5 => Task: Calculate the total sum of all numbers in an array.

function sumArray(arr: number[]) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

//* Problem - 6 => Task: Count how many vowels (a, e, i, o, u) are in a given string.
function countVowels(s: string): number {
  // Create a set of vowels
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Initialize the count
  let count = 0;

  // Loop through the string
  for (const char of s) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("Hello World"));

//* Problem - 7 => Task: Find the factorial of a non-negative integer n.

function factorialIterative(n: number): number {
  // Edge Case: If n is 0 or 1, the factorial is always 1.
  if (n === 0 || n === 1) {
    return 1;
  }

  // Initialize our accumulator
  let result = 1;

  // Loop from 2 up to n, multiplying as we go
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialIterative(5));
console.log(factorialIterative(0));

//* Problem - 8 => Task: Given an array of numbers, return a new array containing only the even numbers.

function filterEvenNumbersManual(nums: number[]): number[] {
  const evens: number[] = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }

  return evens;
}

console.log(filterEvenNumbersManual([1, 2, 3, 4, 5]));

//* Problem - 9 => Task: Generate the first n numbers of the Fibonacci sequence

function generateFibonacci(n: number): number[] {
  if (n === 1) {
    return [0];
  }

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = result[i - 1] + result[i - 2];
    result.push(nextNumber);
  }

  return result;
}

console.log(generateFibonacci(1));
console.log(generateFibonacci(5));
console.log(generateFibonacci(10));

//* Problem - 10 => Task: Given an array of integers, return the smallest value.
function findMinimumSafe(nums: number[]): number {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}

console.log(findMinimumSafe([10, 20, 30, 40, 50]));
console.log(findMinimumSafe([-5, -2, -10, -1]));

//* Problem - 11 => Task: Generate a multiplication table for a number n up to 10.

function generateMultiplicationTable(n: number): string[] {
  const table: string[] = [];

  for (let i = 1; i <= 10; i++) {
    const result = n * i;
    table.push(`${n} x ${i} = ${result}`);
  }

  return table;
}

console.log(generateMultiplicationTable(5));

//* Problem - 12 => Task: Determine if a number n is prime (only divisible by 1 and itself).

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(10)); // false
console.log(isPrime(17)); // true
console.log(isPrime(1)); // false

//* Problem - 13 => Task: Given an array, return a new array with duplicate values removed.

function removeDuplicates(arr: number[]): number[] {
  const uniqueSet = new Set(arr);

  return Array.from(uniqueSet);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//* Problem - 14 => Task: Convert a temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(25)); // 77

//* Problem - 15 => Task: Given a string and a character, find how many times that character appears in the string.

function countCharacterOccurrences(str: string, char: string): number {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countCharacterOccurrences("hello", "l")); // 2
console.log(countCharacterOccurrences("programming", "m")); // 2
console.log(countCharacterOccurrences("banana", "a")); // 3
