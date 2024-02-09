/**
 * Generates an odd-ordered magic square using the Siamese method.
 * A magic square is a square array of numbers consisting of the distinct positive integers 1, 2, ..., n^2,
 * arranged such that the sum of the numbers in any horizontal, vertical, or main diagonal line is always the same number.
 * 
 * @param {number} n - The order of the magic square. Must be an odd number.
 * @returns {Array<Array<number>>} A 2D array representing an n x n magic square.
 */

function generateOddMagicSquare(n) {
    let square = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1;
    let row = 0;
    let col = Math.floor(n / 2);

    while (num <= n * n) {
        square[row][col] = num++;
        let nextRow = (row - 1 + n) % n;
        let nextCol = (col + 1) % n;
        if (square[nextRow][nextCol]) {
            row = (row + 1) % n;
        } else {
            row = nextRow;
            col = nextCol;
        }
    }

    // Apply transformations to introduce randomness
    square = applyRandomTransformations(square);

    return square;
}

function applyRandomTransformations(square) {
    const transformations = [
        square => square, // No transformation
        square => square.map(row => row.reverse()), // Reflect vertically
        square => square.reverse(), // Reflect horizontally
        square => rotateSquare(square), // Rotate 90 degrees
        square => rotateSquare(rotateSquare(square)), // Rotate 180 degrees
        square => rotateSquare(rotateSquare(rotateSquare(square))), // Rotate 270 degrees
    ];

    // Choose a random transformation and apply it
    const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
    return randomTransformation(square);
}

function rotateSquare(square) {
    return square[0].map((val, index) => square.map(row => row[index]).reverse());
}


module.exports = generateOddMagicSquare;
