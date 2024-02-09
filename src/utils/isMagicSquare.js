/**
 * Determines whether the given square is a magic square. A magic square is defined as a square matrix
 * composed of distinct positive integers from 1 to n^2 (where n is the number of rows/columns in the matrix)
 * such that the sum of the numbers in any horizontal, vertical, or diagonal line is always the same constant.
 * This function checks for all these conditions to confirm if the input square matrix is a magic square.
 *
 * The function first calculates the sum of the first row to use as a reference for all other sums. It then
 * iterates through each row and column to ensure their sums match this reference sum. Additionally, it checks
 * the sums of both the principal and secondary diagonals. Finally, it optionally verifies that all elements in
 * the square are distinct and exactly cover the range from 1 to n^2, ensuring each number is used exactly once.
 *
 * @param {Array<Array<number>>} square - A 2D array representing an n x n square matrix, where 'n' is the order
 * of the square. Each sub-array represents a row in the square, and each element within a sub-array represents
 * a number in that row.
 * @returns {boolean} - Returns `true` if the square is a magic square, otherwise returns `false`.
 */

function isMagicSquare(square) {
    const n = square.length;
    let sum = 0;
    let diagSum1 = 0;
    let diagSum2 = 0;

    // Calculate the sum of the first row to set as reference
    for (let i = 0; i < n; i++) {
        sum += square[0][i];
    }

    // Check sums of rows and calculate diagonals
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += square[i][j];
            colSum += square[j][i];
        }

        // Check if any row or column doesn't match the sum of the first row
        if (rowSum !== sum || colSum !== sum) {
            return false;
        }

        // Sum of diagonals
        diagSum1 += square[i][i];
        diagSum2 += square[i][n - 1 - i];
    }

    // Check if diagonals match the sum
    if (diagSum1 !== sum || diagSum2 !== sum) {
        return false;
    }

    // Optional: Check if all elements are distinct and 1 through n^2
    const elements = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            elements.add(square[i][j]);
        }
    }

    if (elements.size !== n * n) {
        return false;
    }

    for (let i = 1; i <= n * n; i++) {
        if (!elements.has(i)) {
            return false;
        }
    }

    return true;
}

module.exports = isMagicSquare;
