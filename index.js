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
    return square;
}

function generateDoublyEvenMagicSquare(n) {
    let square = Array.from({ length: n }, () => Array.from({ length: n }, (_, i) => new Array(n)));
    let i, j;

    // Fill the square with initial values
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            square[i][j] = n * i + j + 1;
        }
    }

    // Change values of specific cells
    for (i = 0; i < n / 4; i++) {
        for (j = 0; j < n / 4; j++) {
            square[i][j] = (n * n + 1) - square[i][j];
            square[n - 1 - i][j] = (n * n + 1) - square[n - 1 - i][j];
            square[i][n - 1 - j] = (n * n + 1) - square[i][n - 1 - j];
            square[n - 1 - i][n - 1 - j] = (n * n + 1) - square[n - 1 - i][n - 1 - j];
        }
    }

    // Adjust the center of the square for n > 4
    if (n > 4) {
        let temp = (n - 2) / 4;
        for (i = temp; i < n - temp; i++) {
            for (j = temp; j < n - temp; j++) {
                square[i][j] = (n * n + 1) - square[i][j];
            }
        }
    }

    return square;
}

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

function printMagicSquare(square) {
    square.forEach(row => console.log(row.join(' ')));
}

// Example Usage
const n = 4; // Change this value to generate different sizes of magic squares
const magicSquare = generateMagicSquare(n);
printMagicSquare(magicSquare);

