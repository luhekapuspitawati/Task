// Function to convert centimeters to meters
function cmToMeter(cm) {
    var m = cm * 0.01;
    return `${cm} cm is ${m} meter`;
}

// Function to convert centimeters to kilometers
function cmToKilometer(cm) {
    var km = cm * 0.00001;
    return `${cm} cm is ${km} kilometers`;
}

// Function to convert centimeters to millimeters
function cmToMillimeter(cm) {
    var mm = cm * 10;
    return `${cm} cm is ${mm} millimeters`;
}

// Testing the functions
console.log(cmToMeter(100));        // 100 cm is 1 meter
console.log(cmToKilometer(100000)); // 100000 cm is 1 kilometers
console.log(cmToMillimeter(100));   // 100 cm is 1000 millimeters
