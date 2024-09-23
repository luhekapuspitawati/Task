// Step 1: Initialize variables
var randomNumber;
var expectedNumber = 5; // The number to stop at

// Step 2: Use a do-while loop to generate random numbers
do {
    randomNumber = Math.floor(Math.random() * 11); // Random number between 0 and 10
    console.log('Random number generated: ' + randomNumber); // Display the random number
} while (randomNumber !== expectedNumber); // Continue until randomNumber equals expectedNumber

// Step 3: Display the final random number
console.log('Stopped! Final random number: ' + randomNumber);

