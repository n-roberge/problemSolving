"use strict";


//Part III

// Whiteboard Challenges

//1. Array with target sum
//Step 1: Iterate through array and subtract each number from the target number
//Step 2: Assign the above remainder to a variable (remainder)
//Step 3: If loop to find if the remainder is in the array
//Step 4: If it is, then return the index position of both the first number and the remainder to an array of possible numbers that would be the sum of the target
//Step 5: to avoid duplication use set() to have only unique values in the array and set it to a different array (checked)

let array = [5, 17, 77, 50];

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

let test = targetSum(array);
console.log(test);

//2. Paindrome


//3. Sequence check


//4. Method: takes array and creates count of positive and sum of negative


//5. 