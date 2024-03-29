![NPM Version](https://img.shields.io/npm/v/magic-squares-generator) ![NPM Downloads](https://img.shields.io/npm/dy/magic-squares-generator)


```
__/\\\\____________/\\\\___________/\\\\\\\\\\\__________/\\\________/\\\________/\\\_____/\\\\\\\\\_______/\\\\\\\\\______/\\\\\\\\\\\\\\\_____/\\\\\\\\\\\_________________/\\\\\\\______________/\\\\\\\\\\_____________/\\\_        
 _\/\\\\\\________/\\\\\\_________/\\\/////////\\\_____/\\\\/\\\\____\/\\\_______\/\\\___/\\\\\\\\\\\\\___/\\\///////\\\___\/\\\///////////____/\\\/////////\\\_____________/\\\/////\\\__________/\\\///////\\\________/\\\\\\\_       
  _\/\\\//\\\____/\\\//\\\________\//\\\______\///____/\\\//\////\\\__\/\\\_______\/\\\__/\\\/////////\\\_\/\\\_____\/\\\___\/\\\______________\//\\\______\///_____________/\\\____\//\\\________\///______/\\\________\/////\\\_      
   _\/\\\\///\\\/\\\/_\/\\\_________\////\\\__________/\\\______\//\\\_\/\\\_______\/\\\_\/\\\_______\/\\\_\/\\\\\\\\\\\/____\/\\\\\\\\\\\_______\////\\\___________________\/\\\_____\/\\\_______________/\\\//_____________\/\\\_     
    _\/\\\__\///\\\/___\/\\\____________\////\\\______\//\\\______/\\\__\/\\\_______\/\\\_\/\\\\\\\\\\\\\\\_\/\\\//////\\\____\/\\\///////___________\////\\\________________\/\\\_____\/\\\______________\////\\\____________\/\\\_    
     _\/\\\____\///_____\/\\\_______________\////\\\____\///\\\\/\\\\/___\/\\\_______\/\\\_\/\\\/////////\\\_\/\\\____\//\\\___\/\\\_____________________\////\\\_____________\/\\\_____\/\\\_________________\//\\\___________\/\\\_   
      _\/\\\_____________\/\\\________/\\\______\//\\\_____\////\\\//_____\//\\\______/\\\__\/\\\_______\/\\\_\/\\\_____\//\\\__\/\\\______________/\\\______\//\\\____________\//\\\____/\\\_________/\\\______/\\\____________\/\\\_  
       _\/\\\_____________\/\\\__/\\\_\///\\\\\\\\\\\/_________\///\\\\\\___\///\\\\\\\\\/___\/\\\_______\/\\\_\/\\\______\//\\\_\/\\\\\\\\\\\\\\\_\///\\\\\\\\\\\/______________\///\\\\\\\/____/\\\_\///\\\\\\\\\/____/\\\_____\/\\\_ 
        _\///______________\///__\///____\///////////_____________\//////______\/////////_____\///________\///__\///________\///__\///////////////____\///////////__________________\///////_____\///____\/////////_____\///______\///_
```

# Magic Square Generator

## Overview
The Magic Square Generator is a Node.js package designed to create magic squares of odd and doubly even orders, as well as verify the magic square property of given square matrices. A magic square is a grid of numbers where the sums of the numbers in each row, column, and the main diagonals all add up to the same constant. This package offers a simple interface to generate and validate these fascinating mathematical objects easily.

## Installation
To add the Magic Square Generator to your project, use the following npm command:

```bash
npm install magic-squares-generator --save
```

This command will download and install the package, making it ready to use in your Node.js applications.

## Usage
After installation, you can generate and print magic squares by importing the package and calling its functions. Here's a simple example to get you started:

```
const { generateMagicSquare, printMagicSquare, isMagicSquare } = require('magic-squares-generator');

// Generate a magic square of order 5
const n = 5;
const square = generateMagicSquare(n);

// Print the generated magic square
console.log("Generated Magic Square:");
printMagicSquare(square);

// Checks if a square is magic 
console.log('Is Magic Square:', isMagicSquare(square)); // This will print true or false

```

This code snippet generates a 5x5 magic square, prints it to the console, and then verifies if the generated square is indeed a magic square.

## API Reference

`generateMagicSquare(n)`
Generates a magic square of order `n`. The order `n` can be any odd number or a doubly even number (divisible by 4).

- **Parameters:** `n` (number) - The order of the magic square.
- **Returns:** A 2D array representing the generated magic square.

`printMagicSquare(square)`
Prints a given magic square to the console in a formatted manner.

- **Parameters:** `square` (Array<Array<number>>) - A 2D array representing a magic square.

`isMagicSquare(square)`
Determines whether a given square matrix is a magic square.

- **Parameters:** `square` (Array<Array<number>>) - A 2D array representing a square matrix.
- **Returns:** true if the square is a magic square, otherwise false.

## Contributing
Contributions to the Magic Square Generator are welcome! Please feel free to submit issues, pull requests, or suggestions to improve the package.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
