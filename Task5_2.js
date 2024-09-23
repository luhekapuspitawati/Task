// Determine player's position in 2D space
let x = 5; // Change this value to test different positions
let y = -3; // Change this value to test different positions

if (x === 0 && y === 0) {
    console.log('Player is in the middle');
} else if (x > 0 && y > 0) {
    console.log('Player is on the top right');
} else if (x < 0 && y > 0) {
    console.log('Player is on the top left');
} else if (x > 0 && y < 0) {
    console.log('Player is on the bottom right');
} else if (x < 0 && y < 0) {
    console.log('Player is on the bottom left');
}
