#! /usr/bin/env node

// Import necessary modules
import inquirer from 'inquirer';
import chalk from 'chalk';

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Initialize the number of attempts
let attempts = 0;

// Create a function to play the game
async function playGame() {
    console.log(chalk.blue('Welcome to the Number Guessing Game!'));
    console.log(chalk.gray('I have selected a number between 1 and 10. Try to guess it!'));

    while (attempts < 3) {
        const { guess } = await inquirer.prompt({
            type: 'number',
            name: 'guess',
            message: `Attempt ${attempts + 1}: Enter your guess:`,
        });

        attempts++;

        if (guess === secretNumber) {
            console.log(chalk.green(`Congratulations! You guessed the number ${secretNumber} correctly!`));
            break;
        } else if (guess < secretNumber) {
            console.log(chalk.yellow('Try a higher number.'));
        } else {
            console.log(chalk.yellow('Try a lower number.'));
        }
    }

    if (attempts === 3) {
        console.log(chalk.red(`Sorry, you've used all your attempts. The secret number was ${secretNumber}.`));
    }
}

// Start the game
playGame();