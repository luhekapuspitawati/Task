// Step 1: Initialize variables and arrays
var random = Math.floor(Math.random() * 10); // Random number from 0-9
var adjectives = ["quick", "lazy", "happy", "sad", "bright", "dark", "smooth", "rough", "silent", "loud"];
var nouns = ["cat", "dog", "bird", "fish", "lion", "tiger", "bear", "wolf", "mouse", "elephant"];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "!"];
var newUsername;
var newPassword;

// Step 2: Create the generate function
function generate(option) {
    if (option === '1') {
        // Generate username
        newUsername = adjectives[random] + "_" + nouns[random];
        console.log(`Generated Username: ${newUsername}`);
    } else if (option === '2') {
        // Generate password
        newPassword = adjectives[random].toUpperCase() + nouns[random] + random + symbols[random];
        console.log(`Generated Password: ${newPassword}`);
    }
}

// Step 3: Get user option and call the generate function
var userOption;
do {
    userOption = prompt("Enter 1 to generate Username or 2 to generate Password:");
} while (userOption !== '1' && userOption !== '2');

generate(userOption);
