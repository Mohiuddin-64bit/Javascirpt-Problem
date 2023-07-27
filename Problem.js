// 1. Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(string) {
  let strLen = string.length;
  let revStr = "";
  for (let i = strLen - 1; i >= 0; i--) {
    revStr += string[i];
  }
  console.log(revStr);
}

// reverseString("Mohiuddin")

// 2. Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

function sumPositiveNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  // console.log(`Total sum is ${sum}`);
}
// sumPositiveNumber([1, 2, 3, 4, 5, -2, -4]);  

// 3. Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
  const frequency = {};
  for (const element of arr) {
    if (!frequency[element]) {
      frequency[element] = 1;
    } else {
      frequency[element]++;
    }
  }
  let mostFrequentElement;
  let maxFrequency = 0;
  for (const element in frequency) {
    if (frequency[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequency[element];
    }
  }
  return mostFrequentElement;
}
// console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));

// 4. Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

// const sortedArray = [2, 4, 6, 8, 10, 12];
// const targetValue = 16;
// const result = findTwoNumbersWithSum(sortedArray, targetValue);
// console.log(result);

// 5. Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Cannot divide by zero!";
      }
      return num1 / num2;
    default:
      return "Invalid operator!";
  }
}
// 6. Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?/{}~";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// 7. Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.v
function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentSymbol = roman[i];
    const currentValue = romanNumerals[currentSymbol];
    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    prevValue = currentValue;
  }

  return result;
}
