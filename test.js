const { generateMagicSquare, printMagicSquare } = require('./index');

function test() {
    let n = 5; // Or any other value you'd like to test
    const result = generateMagicSquare(n);
    console.log('Magic Square Result:', );
    printMagicSquare(result); // This will print the square to the console
    console.log(result); // This will print the square as an array
}

test(); // Correctly calling the test function
