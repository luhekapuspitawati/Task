// Variables to hold area and circumference
var area;
var circum;

// Function to calculate area and circumference of a square
function square(side) {
    area = side * side;
    circum = 4 * side;
    console.log('---Square-----');
    console.log(`Area : ${area}`);
    console.log(`Circumference : ${circum}`);
}

// Function to calculate area and circumference of a rectangle
function rect(width, height) {
    area = width * height; // a. Multiply width and height for area
    circum = 2 * (width + height); // c. Add width and height for circumference
    console.log('---Rectangle-----');
    console.log(`Area : ${area}`);
    console.log(`Circumference : ${circum}`);
}
