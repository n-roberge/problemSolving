"use strict";

//Part II ************************************
//1. Happy Numbers ********************************************
//Step 1: Take user input and use while loop: while it the input is less than zero:
//Step 2: Take the number and break it down using modulo for the first then...
//Step 3: Divide the number by 10 to get the second number
//Step 4: Square the number and add them to the sum
//Step 5: Use if loop to check if sum is equal to one = is a happy number
//Step 6: Else if the sum is greater to one (or less than four) = number is sad

function happyNumber(number) {
    let userInput = number;
    let sum = 0;

    while (number > 0) {

        //breaks apart the number by shifting decimal 
        let individualNumber = number % 10;
        number = Math.floor(number / 10);

        //squares each number and adds them
        sum += individualNumber**2;
    }

    if (sum === 1) {
        console.log(userInput + " is a happy number");
        return true;

    } else if (sum > 1 && sum <= 4) {
        console.log(userInput + " is a sad number")
        return false;
    }

    return happyNumber(sum);
};

//2. Prime Numbers ********************************************
//Step 1: First function to see if a number is prime: Iterate through numbers 2 - 100 (user input)
//Step 2: If loop to see if the number is less than 2
//Step 3: For loop using modulus dividing by itself, if 0 then return "false", else return true
//Step 4: Second function to display the prime numbers: iterate through 1-100 (can exclude 2 and iterate by 2 to skip even numbers since we know they're not prime)
//Step 5: If the number is prime, push to array
//Step 6: Display array of prime numbers

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

// outputPrime(100);

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
};

//starting at user input
function fibonacciWithStart(userInput){
    let firstNum = userInput, secondNum = userInput + 1, output = [], tempNum;
    
    tempNum = firstNum + secondNum;

    //1000 arbitrary stopping point
    while(tempNum <= 1000){
        output.push(tempNum);
        firstNum = secondNum;
        secondNum = tempNum;
        tempNum = firstNum + secondNum;
    }

    console.log(output);
};

let fib = fibonacciWithStart(5);
