// Step 1: Create an array to store the hours spent each day
let gameTime = [2, 2, 3, 3, 1, 4, 5]; // Hours for Monday to Sunday
let totalHours = 0;
let exceedCount = 0;
let timeLimit = 2; // Steve's daily game time limit

// Step 2: Use a for loop to calculate the total hours and check if he exceeded the limit
for (let i = 0; i < gameTime.length; i++) {
    totalHours += gameTime[i]; // Add each day's game time to the total
    
    if (gameTime[i] > timeLimit) {
        exceedCount++; // Count how many days exceeded the time limit
    }
}

// Step 3: Display the total time spent and the number of days Steve exceeded the limit
console.log(`Total time spent playing games: ${totalHours} hours`);
console.log(`Number of days Steve exceeded the game time limit: ${exceedCount}`);
