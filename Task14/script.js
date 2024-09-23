// Step 1: Store Numbers in Array
var numbers = [111, 11, 1, 111, 1111, 11, 11, 111, 1, 111];

// Step 2: Loop to check each number
function findNumberLocation(numbers) {
    for (var i = 0; i < numbers.length; i++) { // 1. Loop through the numbers array
        if (numbers[i] === 1111) { // Check if the current number is 1111
            return i; // 2. Return the index if the number is found
        }
    }
    return -1; // Return -1 if the number is not found
}

var numLocation = findNumberLocation(numbers); // Call the function
console.log(`1111 is located at index ${numLocation}`); // Log the result
