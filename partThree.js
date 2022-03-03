"use strict";

//Part III

// Whiteboard Challenges

//1. Array with target sum **********************************
//Step 1: Iterate through array and subtract each number from the target number
//Step 2: Assign the above remainder to a variable (remainder)
//Step 3: If loop to find if the remainder is in the array
//Step 4: If it is, then return the index position of both the first number and the remainder to an array of possible numbers that would be the sum of the target
//Step 5: to avoid duplication use set() to have only unique values in the array and set it to a different array (checked)

function targetSum(array){
    let target = 55, remainder = 0;
    let answer = []; let checked = []

    for (let i = 0; i <= array.length; i++){
        remainder = target - array[i];

        if (array.includes(remainder)){
            answer.push(i, array.indexOf(remainder));
            return checked = [...new Set(answer)];
        }
    }
}

//let array = [5, 17, 77, 50];
//let test = targetSum(array);
// console.log(test);

//2. Palindrome **********************************
//Step 1: Convert input into array
//Step 2: Use the same steps as reverse word and return result to check against
//Step 3: Use if condition to see if input equals the reversed
//Step 4: Output console log a message indicating if it matched or not

function paindromeCheck(){
    let word = prompt("Please enter a word or phrase to check if it is a palindrome: ")
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }

    if (word === reversedWord){
        console.log(word + " is a palindrome.");
    }
    else {
        console.log(word + " is not a palindrome.");
    }
};

//paindromeCheck();

//3. Sequence check
//Step 1: Take array of integers and sort them numerically
//Step 2: If loop: Iterate through array and check if the next iteration value is equal to the current one plus one 
//Step 3: If the above is true, then return true; else return false

function sequenceCheck(array){
    array.sort();
    for (let i = 0; i <= array.length; i++){
        if (array[i+1] === array[i]+1){
            return true
        }

        else {
            return false
        }
    }
}
let array1 = [5,7,3,8,6];
let array2 = [17,15,20,19,21,16,18];
let test = sequenceCheck(array2);
console.log(test);

//4. Method: takes array and creates count of positive and sum of negative


//5. 