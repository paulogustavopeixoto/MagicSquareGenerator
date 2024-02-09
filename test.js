const { generateMagicSquare, printMagicSquare, isMagicSquare } = require('./index');

function testCreator() {
    let n = 5; // Or any other value you'd like to test
    const result = generateMagicSquare(n);
    console.log('Magic Square Result:', );
    printMagicSquare(result); // This will print the square to the console
    console.log(result); // This will print the square as an array
}

function testSolver() {
    const resultTrue = [
        [ 17, 24, 1, 8, 15 ],
        [ 23, 5, 7, 14, 16 ],
        [ 4, 6, 13, 20, 22 ],
        [ 10, 12, 19, 21, 3 ],
        [ 11, 18, 25, 2, 9 ]
      ];
      const resultFalse = [
        [ 17, 24, 1, 8, 15 ],
        [ 23, 5, 7, 14, 16 ],
        [ 4, 6, 13, 20, 22 ],
        [ 10, 12, 19, 21, 3 ],
        [ 11, 18, 25, 2, 8 ]
      ];
    console.log('1 - Is Magic Square:', isMagicSquare(resultTrue)); // This will print true or false
    console.log('2 - Is Magic Square:', isMagicSquare(resultFalse)); // This will print true or false
}

testCreator(); // Correctly calling the test function
testSolver(); // Correctly calling the test function