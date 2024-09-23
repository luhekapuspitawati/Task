// Step 1: Declare Steve's current score
let currentScore = 1858;

// Step 2: Find the remainder when divided by 500
let remainder = currentScore % 500;

// Step 3: Subtract the remainder from 500 to find how many more points are needed
let pointsNeeded = 500 - remainder;

console.log(pointsNeeded); // Expected result: 142
