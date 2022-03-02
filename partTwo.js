"use strict";

//Part II ************************************
//1. Happy Numbers ********************************************
//Step 1: Take input number and check if it is a positive number in if loop
//Step 2: If it is, convert number into array
//Step 3: Take each digit from the array and square each digit
//Step 4: Add the squares
//Step 5: Take the squares and make that an array
//Step 6: Add each number in the array
//Step 7: If that number = 1, then is a happy number, otherwise repeat

// function happyNumber(userNumber){
//     let array = "";
//     let sum = 0;
//     for (let i = 0; i < userNumber.length; i++){
//         //squares the numbers and adds them to the array
//         array += (userNumber[i]**2);
//     }

//     for (let i in array){
//         sum += array[i];
//     }
//     let joinedArray = array.join(",")
//     return joinedArray;
// };
// let myArray = happyNumber("25");
// console.log(myArray);

//2. Prime Numbers ********************************************
//Step 1: First function to see if a number is prime: Iterate through numbers 1 - 100
//Step 2: If loop using modulus dividing by itself, if 0 then return "false", else return true
//Step 3: Second function to display the prime numbers: iterate through 1-100 (can exclude 2 and iterate by 2 to skip even numbers since we know they're not prime)
//Step 4: If the number is prime, push to array
//Step 5: Display array of prime numbers

function isPrime(number){
    if (number < 2){
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
};

function outputPrime(userNumber){
    let array = [2];
    for (var i = 3; i < userNumber; i +=2){
        if (isPrime(i)){
            array.push(i);
        }
    }
    console.log(array);
};
outputPrime(100);

//3. Fibonacci ********************************************
//Step 1: Define variables for the first and second numbers to be added, and then also have a third number that is used for calculations and storage
//Step 2: Add the first and second number and store as the temporary number
//Step 3: Have user input be the max value
//Step 4: While loop: the temporary number is less than or equal to the input...
//Step 5: Add the two numbers
//Step 6: The first number will then become the second number, second number the temporary number, and the temporary number will be the sum of the first and second

function fibonacci(userInput){
    let firstNum = 0, secondNum = 1, output = [], tempNum;
    
    tempNum = firstNum + secondNum;

    while(tempNum <= userInput){
        output.push(tempNum);
        firstNum = secondNum;
        secondNum = tempNum;
        tempNum = firstNum + secondNum;
    }

    console.log(output);
    console.log(typeof(output));

};

//let fib = fibonacci(800);
