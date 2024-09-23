// Task 1: Check if a number is positive, negative, or zero
let testNumber = -40; // Change this to test different numbers

if (testNumber > 0) {
    console.log('positive');
} else if (testNumber < 0) {
    console.log('negative');
} else {
    console.log('not negative or positive');
}


// Task 2: Check if a person is eligible for a driver's license
let age = 8; // Change this to test different ages

if (age >= 17) {
    console.log('Eligible for driver\'s license');
} else {
    console.log('Not eligible for driver\'s license');
}

// Task 3: Determine student grades based on score
let score = 85; // Change this to test different scores

if (score > 90) {
    console.log('Grade A');
} else if (score > 75) {
    console.log('Grade B');
} else if (score > 60) {
    console.log('Grade C');
} else {
    console.log('Grade D');
}


// Task 4: Calculate total payment after discount
let totalPayment = 200000;
let member = true; // Set this to true or false to test

if (member) {
    totalPayment = totalPayment * 0.9; // 10% discount for members
}

console.log('Total payment after discount:', totalPayment);


// Task 5: Display a message based on the chosen player
let chosenPlayer = 'Knight'; // Change this to 'Wizard' to test

if (chosenPlayer === 'Knight') {
    console.log('Welcome, Knight the hero!');
} else if (chosenPlayer === 'Wizard') {
    console.log('Welcome, Wizard the witch!');
} else {
    console.log('Unknown player type');
}
