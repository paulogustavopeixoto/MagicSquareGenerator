const generateOddMagicSquare = require('./generateOddMagicSquare');
const generateDoublyEvenMagicSquare = require('./generateDoublyEvenMagicSquare');

/**
 * Generates a magic square of order n. This function determines the appropriate method to generate a magic square
 * based on the parity of n. For odd-ordered squares (n is odd), it uses the Siamese method. For doubly even-ordered
 * squares (n is a multiple of 4), it follows a specific pattern to ensure all rows, columns, and diagonals sum to the
 * same constant. Singly even-ordered magic squares (n is even but not a multiple of 4) are not supported by this implementation.
 * 
 * A magic square is a square grid filled with distinct positive integers in the range 1 to n^2 arranged such that the sum
 * of the numbers in any horizontal, vertical, or main diagonal line is always the same.
 * 
 * @param {number} n - The order of the magic square. It defines the size of the square, n x n.
 * @returns {Array<Array<number>>|[]} A 2D array representing an n x n magic square if n is odd or doubly even.
 * For unsupported orders (singly even), an empty array is returned with a console message indicating the limitation.
 */

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
