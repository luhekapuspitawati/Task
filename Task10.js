// Step 1: Input variables
var operator = prompt('Enter operator ( +, -, * or / ): '); // 1
var number1 = parseFloat(prompt('Enter first number: ')); // 2
var number2 = parseFloat(prompt('Enter second number: ')); // 3
var result;

// Step 2: Check If Not a Number
if (!isNaN(number1) && !isNaN(number2)) {
    // Algorithm no 3 here
    if (operator == '+') {
        result = number1 + number2; // 1
    } else if (operator == '-') {
        result = number1 - number2; // 2
    } else if (operator == '*') {
        result = number1 * number2; // 3
    } else if (operator == '/') {
        result = number1 / number2; // 4
    } else {
        alert('No operator chosen');
    }
    
    // Display result here
    console.log(`${number1} ${operator} ${number2} = ${result}`);
} else {
    alert('Your input is not a number');
}
