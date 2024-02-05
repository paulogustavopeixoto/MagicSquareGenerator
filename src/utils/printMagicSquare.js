/**
 * Prints the given magic square to the console. This function iterates through each row of the magic square
 * and prints it in a formatted manner where the numbers in each row are separated by spaces. The function
 * is designed to visually display the structure of the magic square, making it easier to verify the properties
 * of the square (i.e., the equal sums across all rows, columns, and diagonals) at a glance.
 * 
 * @param {Array<Array<number>>} square - A 2D array representing an n x n magic square, where 'n' is the order of the square.
 * Each sub-array represents a row in the magic square, and each element within a sub-array represents a number in that row.
 */

function printMagicSquare(square) {
    square.forEach(row => console.log(row.join(' ')));
}

module.exports = printMagicSquare;
