//import readlineSync from 'readline-sync';
//import readline from 'readline';

import chalk from 'chalk'; // colors text

import {TicTacToe} from './functions.js' // functions to make game work and play

import input from 'readline-sync'; // let user input

import fs from 'fs'; // allows writing to/from files

//START PROGRAM
console.log(chalk.blue(`Would you like to play tic tac toe? (2 players)`))

let answer = input.question("Y or N: ");

if (answer == "Y" || answer == "y") // let's play
{
    let player1Name= input.question(chalk.cyan("What is player 1's name? "));
    const player1 = `Player 1: ${player1Name}`;

    fs.writeFile('./input.json', player1, err => {
        if (err) throw err;
        // if not, successfully written
      })

    let player2Name= input.question(chalk.magenta("What is player 2's name? "));
    const player2 = `\nPlayer 2: ${player2Name}`;

    fs.appendFile("./input.json", player2, err => {
        if(err) throw err;
       // if not, successfully written
    });

    // GAME START
    var game = new TicTacToe();
    console.log(chalk.blue("Player 2, " + player2Name + ", go first:"));
    game.gameStart();
}
else if (answer == "N" || answer == "n") // don't play
{
    console.log(chalk.yellow('Exiting game...'));
}