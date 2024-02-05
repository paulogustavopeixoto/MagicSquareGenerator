const generateOddMagicSquare = require('./generateOddMagicSquare');
const generateDoublyEvenMagicSquare = require('./generateDoublyEvenMagicSquare');

function generateMagicSquare(n) {
    if (n % 2 === 1) {
        return generateOddMagicSquare(n);
    } else if (n % 4 === 0) {
        return generateDoublyEvenMagicSquare(n);
    } else {
        console.log("Singly even magic squares are not supported in this example.");
        return [];
    }
}

module.exports = generateMagicSquare;
