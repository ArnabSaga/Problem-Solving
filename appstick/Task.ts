//* Task - 1
/*
1. Print Numbers 1 to 10
Use a loop to print numbers from 1 to 10.
Example Output:
1
2
3
...
10
*/

const printNumber = (start: number, end: number) => {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};
printNumber(1, 10);

//* Task - 2
/*
2. Find Even Numbers
Write a function that prints all even numbers from 1 to 20.

Expected Output: 2 4 6 8 10 12 14 16 18 20
*/

const printEvenNumber = (start: number, end: number) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
printEvenNumber(1, 20);

//* Task - 3
/*
3. Sum of Array
Create a function that returns the sum of all numbers in an array.

sumArray([1,2,3,4])
Output: 10
*/

const sumOfArray = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfArray([1, 2, 3, 4]));

//* Task - 4
/*
4. Find Largest Number
Write a function that finds the largest number in an array.

findLargest([5, 9, 2, 15, 7])
Output: 15
*/

const findLargestNumber = (arr: number[]) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
console.log(findLargestNumber([5, 9, 2, 15, 7]));

//* Task - 5
/*
5. Reverse an Array
Using a loop, reverse an array manually (without using .reverse()).

[1,2,3,4]
Output: [4,3,2,1]
*/

const reverseArray = (arr: number[]) => {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};
console.log(reverseArray([1, 2, 3, 4]));

//* Task - 6
/*
6. Count Vowels
Create a function that counts vowels in a string.

countVowels("javascript")
Output: 3
*/

const countoFVowels = (str: string) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(countoFVowels('javascript'));

//* Task - 7
/*
7. Multiplication Table
Write a function that prints the multiplication table of a given number.

table(5)
Output:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/

const multiplicationTable = (num: number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};
multiplicationTable(5);

//* Task - 8
/*
8. Remove Negative Numbers
Given an array, create a new array without negative numbers.

removeNegative([1,-2,3,-4,5])
Output: [1,3,5]
*/

const removeNegativeNumbers = (arr: number[]) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeNegativeNumbers([1,-2,3,-4,5]));

//* Task - 9
/*
9. Count How Many Times a Number Appears
Write a function that counts how many times a number appears in an array.

countNumber([1,2,2,3,2,4], 2)
Output: 3
*/

const countNumber = (arr: number[], num: number) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}
console.log(countNumber([1,2,2,3,2,4], 2));

//* Task - 10
/*
10. Palindrome Checker
Write a function to check whether a word is a palindrome or not.

isPalindrome("madam")
Output: true
isPalindrome("hello")
Output: false
*/

function isPalindrome(str: string): boolean {
  const palindromeCheck = str.split('').reverse().join('');
  if (str === palindromeCheck) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));
