/**
 * Generates a doubly even magic square. A doubly even magic square has an order (n) that is a multiple of 4.
 * This function creates a square matrix filled with distinct positive integers in the range 1 to n^2, arranged
 * such that the sum of the numbers in any row, column, and both main diagonals are the same.
 * The generation follows a specific pattern where certain positions in the square are filled based on their
 * coordinates, and then values in specific cells are inverted according to a predefined rule to ensure the
 * magic square properties are met.
 * 
 * @param {number} n - The order of the magic square. Must be a positive integer that is a multiple of 4.
 * @returns {Array<Array<number>>} A 2D array representing an n x n doubly even magic square.
 */

function generateDoublyEvenMagicSquare(n) {
    let square = Array.from({ length: n }, () => Array(n).fill(0));
    let i, j;

    // Initial fill of the square with sequential numbers
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            square[i][j] = n * i + j + 1;
        }
    }

    // Inversion rule to adjust specific cells for the magic square property
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            // Invert the value for cells in the corner or center 4x4 sub-squares
            if (i % 4 < 2 && j % 4 < 2 || i % 4 >= 2 && j % 4 >= 2) {
                square[i][j] = (n * n + 1) - square[i][j];
            }
        }
    }

    return square;
}

module.exports = generateDoublyEvenMagicSquare;
