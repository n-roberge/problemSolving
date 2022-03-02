"use strict";

//Part I *****************************

//1. Reverse a string **********************************
//Step 1: Take the word and iterate through each letter from reverse
//Step 2: As it is iterating through each letter, add it to a new array
//Step 3: return the new array

function reverseAString(word){
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    return reversedWord
};

let newWord = reverseAString("Hello");
// console.log(newWord)

//2. Capitalize a letter **********************************
//Step 1: Take the string and identify words, splitting by spaces (" ") and adding to an array of words
//Step 2: Iterate through the words and capitalizing the character at position 0 and then adding that character back to the array
//Step 3: Join the words in the array and add a space between them " " and return it

function capitalizeLetter(userString){
    let words = userString.split(" ");
    for (let i = 0; i <words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }
    return words.join(" ");
};

let sentence = capitalizeLetter("hello how are you doing?");
// console.log(sentence);

//3. Compress a string of characters **********************************
//Step 1: Take the input and create an array of the characters
//Step 2: Create an empty string to put the new characters into
//Step 3: Iterate through the characters and count the consecutive letters using loop that tracks the number of letters as well as the current letter
//Step 4: Use a while loop to check if the current letter is equal to the next letter and add to the count if it is and go to the next index position
//Step 5: Use if loop to add the letter and count to the empty string depending if the count is 1 or more
//Step 6: return the new string

function compressString(userString){
    let newString = "";
    let characterArray = userString.split("");

    for (let i = 0; i < characterArray.length; i++){
        let count = 1;
        let currentCharacter = characterArray[i];
        while (i < characterArray.length - 1 && characterArray[i] === characterArray[i + 1]){
            count++;
            i++;
        }
        if (count === 1){
            newString += currentCharacter;
        }
        else {
            newString += currentCharacter + count;
        }
    }
    return newString;

}

let compress = compressString("jjjfjfkdkdkkkkaaiierjjjj");
// console.log(compress);

//4. Palindrome **********************************
//Step 1: Convert input into array
//Step 2: Use the same steps as reverse word and return result to check against
//Step 3: Use if condition to see if input equals the reversed
//Step 4: Output console log a message indicating if it matched or not

function paindromeCheck(word){
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

paindromeCheck("kayak")