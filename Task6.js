// Step 1: Declare variables
var num1 = Math.floor(Math.random() * 10) + 1; // Random integer between 1 and 10
var num2 = Math.floor(Math.random() * 10) + 1; // Random integer between 1 and 10
var operators = ['x', '+', '-', ':'];

// Step 2: Generate a random operator
var random = Math.floor(Math.random() * 4); // Random index between 0-3
var choosenOperator = operators[random]; // Select a random operator from the array

// Step 3: Use switch statement to perform the operation
switch (choosenOperator) {
    case 'x': // Multiplication case
        total = num1 * num2;
        console.log(`${num1} x ${num2} = ${total}`);
        break;
    case '+': // Addition case
        total = num1 + num2;
        console.log(`${num1} + ${num2} = ${total}`);
        break;
    case '-': // Subtraction case
        total = num1 - num2;
        console.log(`${num1} - ${num2} = ${total}`);
        break;
    case ':': // Division case
        total = num1 / num2;
        console.log(`${num1} : ${num2} = ${total}`);
        break;
}
