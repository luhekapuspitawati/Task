// Step 1: Use a for loop to create platforms
for (var platform = 1; platform <= 3; platform++) {
    console.log('Platform created ' + platform); // Output for the platform

    // Step 2: Nested for loop to create carrots on each platform
    for (var carrot = 1; carrot <= 2; carrot++) {
        console.log('--- Carrot ' + carrot); // Output for each carrot
    }
}
