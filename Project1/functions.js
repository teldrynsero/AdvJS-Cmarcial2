import readline from 'readline';

import input from 'readline-sync';

import chalk from 'chalk';

import fs from 'fs';

//const log = console.log;

var player1Wins = 0;
var player1Loses = 0;

var ties = 0;

var player2Wins = 0;
var player2Loses = 0;

export class TicTacToe
{
    constructor()
    {
        this.ticTacToe = [];
        this.ticTacToe[8] = undefined; // all 9 spaces on board
        this.ticTacToeBoard = ''; // the board
        this.currentPlayer = false; // player 2 = false (O), player 1 = true (X)
        this.gameEnded = false; // game is not over unless otherwise stated
        this.moveHistory = []; // move history log for debugging + recording total moves
    
        this.rl = readline.createInterface
        ({
            input: process.stdin,
            output: process.stdout
        })

    }

    /// display tic tac toe board layout
    gameBoard(){
    this.ticTacToeBoard = `${this.make(this.ticTacToe[0])} | ${this.make(this.ticTacToe[1])} | ${this.make(this.ticTacToe[2])}
---------
${this.make(this.ticTacToe[3])} | ${this.make(this.ticTacToe[4])} | ${this.make(this.ticTacToe[5])}
---------
${this.make(this.ticTacToe[6])} | ${this.make(this.ticTacToe[7])} | ${this.make(this.ticTacToe[8])}`;
}

    // START THE GAME
    gameStart()
    {
        this.showBoard();

        // get moves from user input
        this.rl.on("line", (input) =>
        {
            this.readMove(parseInt(input))
        })
    }

    endGame()
    {
        this.rl.close();
        this.gameEnded = true;
        //console.log("MOVE HISTORY: ")
        //console.log(this.moveHistory) displays move history for debugging
        console.log(chalk.blue(`Would you like to tic tac toe again? (2 players)`))

        let answer = input.question("Y or N: ");

        if (answer == "Y" || answer == "y") // let's play again
        {
            var game = new TicTacToe();
            console.log(chalk.blue('Player 2, go first:'))
            game.gameStart();
        }
        else if (answer == "N" || answer == "n") // don't play again
        {
            console.log(chalk.yellow('Thank you for playing! Here are the results:'))
            
            // Calculating results to record
            const player1Score = `\nPlayer 1's stats: Wins: ${player1Wins}, Loses: ${player1Loses}`;

            const player2Score = `\nPlayer 2's stats: Wins: ${player2Wins}, Loses: ${player2Loses}`;

            const bothTies = `\nTotal Ties: ${ties}`;

            fs.appendFileSync('./input.json', player1Score);

            fs.appendFileSync('./input.json', player2Score);

            fs.appendFileSync('./input.json', bothTies);

            var data = fs.readFileSync('input.json');
            console.log(data.toString());

            // Exit
            console.log(chalk.cyan('Exiting game...'))
            process.exit();   
        } 

        return false; 
    }

    continuePlay()
    {
        this.showBoard();
        this.processGame();
        if(!this.gameEnded) // continue game if there has not been win or tie
        {
            // switch between players
            if (arguments[0] == true) // player 1's turn?
            {
                this.currentPlayer = this.currentPlayer
            }
            else // player 2's turn otherwise
            {
                this.currentPlayer = !this.currentPlayer
            }

            console.log(chalk.blue(`Player ${this.showPlayer(this.currentPlayer)}'s turn (position[1-9]): `))
        }
    }

    processGame()
    {
        // once at least 5 moves have been made (minimum for a win to be made)
        if(this.moveHistory.length >= 5)
        {
            // check if there are 3 symbols in a row (vertical, horizontal, or diagonal)
            // check to see if the 3 symbols are all the same, and thus a win for a player
            var checkSet = new Set()
            // VERTICAL wins
            if (this.ticTacToe[0] && this.ticTacToe[3] && this.ticTacToe[6] &&
                (Array.from(checkSet.add(this.ticTacToe[0]).add(this.ticTacToe[3]).add(this.ticTacToe[6])).length === 1))
            {
                console.log(chalk.yellow(`Player ${this.getPlayerFromChar(this.ticTacToe[0])} WINS`));
                if (this.currentPlayer == true) // player 1 WON
                {
                    player1Wins = player1Wins + 1;
                    player2Loses = player2Loses + 1;
                }
                else // player 2 WON
                {
                    player1Loses = player1Loses + 1;
                    player2Wins = player2Wins + 1;
                }
                this.endGame();
            }
            checkSet.clear();
            if (this.ticTacToe[1] && this.ticTacToe[4] && this.ticTacToe[7] &&
                (Array.from(checkSet.add(this.ticTacToe[1]).add(this.ticTacToe[4]).add(this.ticTacToe[7])).length === 1))
            {
                console.log(chalk.yellow(`Player ${this.getPlayerFromChar(this.ticTacToe[1])} WINS`));
                if (this.currentPlayer == true)
                {
                    player1Wins = player1Wins + 1;
                    player2Loses = player2Loses + 1;
                }
                else
                {
                    player1Loses = player1Loses + 1;
                    player2Wins = player2Wins + 1;
                }
                this.endGame();
            }
            checkSet.clear();
            if (this.ticTacToe[2] && this.ticTacToe[5] && this.ticTacToe[8] &&
                (Array.from(checkSet.add(this.ticTacToe[2]).add(this.ticTacToe[5]).add(this.ticTacToe[8])).length === 1))
            {
                console.log(chalk.yellow(`Player ${this.getPlayerFromChar(this.ticTacToe[2])} WINS`));
                if (this.currentPlayer == true)
                {
                    player1Wins = player1Wins + 1;
                    player2Loses = player2Loses + 1;
                }
                else
                {
                    player1Loses = player1Loses + 1;
                    player2Wins = player2Wins + 1;
                }
                this.endGame();
            }
            checkSet.clear();
            // HORIZONTAL wins
            if (this.ticTacToe[0] && this.ticTacToe[1] && this.ticTacToe[2] &&
                (Array.from(checkSet.add(this.ticTacToe[0]).add(this.ticTacToe[1]).add(this.ticTacToe[2])).length === 1))
            {
                console.log(chalk.yellow(`Player ${this.getPlayerFromChar(this.ticTacToe[0])} WINS`));
                if (this.currentPlayer == true)
                {
                    player1Wins = player1Wins + 1;
                    player2Loses = player2Loses + 1;
                }
                else
                {
                    player1Loses = player1Loses + 1;
                    player2Wins = player2Wins + 1;
                }
                this.endGame();
            }
            checkSet.clear();
            if (this.ticTacToe[3] && this.ticTacToe[4] && this.ticTacToe[5] &&
                (Array.from(checkSet.add(this.ticTacToe[3]).add(this.ticTacToe[4]).add(this.ticTacToe[5])).length === 1))
            {
                console.log(chalk.yellow(`Player ${this.getPlayerFromChar(this.ticTacToe[3])} WINS`));
                if (this.currentPlayer == true)
                {
                    player1Wins = player1Wins + 1;
                    player2Loses = player2Loses + 1;
                }
                else
                {
                    player1Loses = player1Loses + 1;
                    player2Wins = player2Wins + 1;
                }
                this.endGame();
            }
            checkSet.clear();
            if (this.ticTacToe[6] && this.ticTacToe[7] && this.ticTacToe[8] &&
                (Array.from(checkSet.add(this.ticTacToe[6]).add(this.ticTacToe[7]).add(this.ticTacToe[8])).length === 1))
            {
                console.log(chalk.yellow(`Player ${this.getPlayerFromChar(this.ticTacToe[6])} WINS`));
                if (this.currentPlayer == true)
                {
                    player1Wins = player1Wins + 1;
                    player2Loses = player2Loses + 1;
                }
                else
                {
                    player1Loses = player1Loses + 1;
                    player2Wins = player2Wins + 1;
                }
                this.endGame();
            }
            checkSet.clear();
            // DIAGNOL wins
            if ((this.ticTacToe[0] && this.ticTacToe[4] && this.ticTacToe[8] &&
                (Array.from(checkSet.add(this.ticTacToe[0]).add(this.ticTacToe[4]).add(this.ticTacToe[8])).length === 1)) || (this.ticTacToe[2] && this.ticTacToe[4] && this.ticTacToe[6] && (Array.from(checkSet.add(this.ticTacToe[2]).add(this.ticTacToe[4]).add(this.ticTacToe[6])).length === 1)))
            {
                console.log(chalk.yellow(`Player ${this.getPlayerFromChar(this.ticTacToe[4])} WINS`));
                if (this.currentPlayer == true)
                {
                    player1Wins = player1Wins + 1;
                    player2Loses = player2Loses + 1;
                }
                else
                {
                    player1Loses = player1Loses + 1;
                    player2Wins = player2Wins + 1;
                }
                this.endGame();
            }
            // TIE or NO wins
            else if (this.moveHistory.length == 9) // board is filled up, but no wins
            {
                console.log(chalk.green('TIE; NO WINNER'));

                ties = ties + 1;

                this.endGame();
            }
            checkSet.clear();
        }
    }

    // OTHER
    make(item) // makes the tic tac toe board
    {
        if (item == undefined) // if no moves made in this spot...
        {
            return ' '; // it is blank
        }
        else // if a move HAS been made in this spot...
        {
            return item; // place the player's symbol
        }
    }

    showPlayer(player) // show who's turn it is
    {
        if (player == true) // player 1
        {
            return 1;
        }
        else if (player == false) // player 2
        {
            return 2;
        }
    }

    getPlayerFromChar(char) // find out which player won based on the symbol
    {
        return this.showPlayer(char === 'X')
    }

    getCharacter(player) // which character to display based on which player's turn it is
    {
        if (player == true) // player 1
        {
            return 'X';
        }
        else if (player == false) // player 2
        {
            return 'O';
        }
    }
  
    showBoard() // show the board based on new moves made
    {
        this.gameBoard()
        console.log(this.ticTacToeBoard);
    }

    readMove(position) // do something with the move the player has requested
    {
        var self = this
        // is position 1-9 and thus valid?

         // is position over 9 or below 1 and thus not valid?
        if((position > 9) || position < 1)
        {
            // wrong position
            console.log(chalk.red("Not a valid position; error occured"));
            this.endGame(); // how to handle this... let's just start over
        }

        // is position is occupied and thus not valid?
        if(self.ticTacToe[(position - 1)] !== undefined)
        {
            console.log(chalk.red("Position already occupied, try again: "));
        }
        
        // position IS valid
        else
        {
            // GET move
            self.ticTacToe[(position - 1)] = self.getCharacter(self.currentPlayer);

            // RECORD move
            self.recordMove((position - 1), self.currentPlayer);

            // CONTINUE the game
            self.continuePlay();
        }
    }

    recordMove(position, player)
    {
        this.moveHistory.push // adds to move history log
        ({
            position: position,
            char: this.getCharacter(this.currentPlayer),
            player: this.showPlayer(this.currentPlayer)
        });
    }

    processInput(moveContents)
    {
        var mc = new Set(moveContents);
        this.recordMove(mc[0], mc[1], currentPlayer);
    }

}