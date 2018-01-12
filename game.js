var inquirer = require('inquirer');
var word = require('./word.js');

var lettersGuessed = [];
var matchedLetters = [];
// var guessLetter = [];
var guessesLeft = 10;
var totalGuesses = 0;
var letterGuessed = null;

// var letter = [];
// var guessesLeft = 10;

console.log("Let's play some Hangman!");

// var start = function(){
// }

    var guessLetter = function() {
        for (var i = 0; i < lettersGuessed.length; i++){
            lettersGuessed.push(guessLetter);
            }
          inquirer.prompt([
            {
              name: "Guesses",
              type: "input",
              message: "Guess a letter!"
            }]).then(function(answers) {
            console.log(answers);
        });
    }

console.log(lettersGuessed);
guessLetter();

var underScore = "_";
var underScoreArray = [];

// function game(){
//     this.randomWord = word[Math.floor(Math.random() * word.length)];
//     this.randomLetter = this.randomWord.split("");
//     this.randomWord = new Word(randomWord);
    
//     console.log(this.randomLetter);
   
// }

// game();