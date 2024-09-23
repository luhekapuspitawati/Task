// Step 1: Initialize Variables & Arrays
var questionList = [
    "What country has the longest coastline in the world?",
    "By size, what is the smallest country in the world?",
    "Which country has a unicorn as its national animal?",
    "Which country is home to the world’s tallest building?",
    "Officially, what is the coldest country in the world?"
];

var answerKeyList = [
    "canada",
    "vatican city",
    "scotland",
    "united arab emirates",
    "russia"
];

var score = 0;
var i = 0;

// Step 2: Start the quiz
do {
    var playerAnswer = prompt(questionList[i]).toLowerCase(); // Get player answer
    var answerKey = answerKeyList[i]; // Get the corresponding answer

    // Step 3: Check the answer
    if (playerAnswer === answerKey) {
        score += 20; // Increase score if correct
    }
    i++; // Move to the next question

} while (i < questionList.length); // Continue until all questions are answered

// Step 4: Display the score
console.log(`Your score: ${score}`);
