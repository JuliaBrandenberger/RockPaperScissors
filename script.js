
"use strict"; // makes so you can't mistype a variable name, you have to explicitly say when you want to create a variable with let or const
const choices = ["rock", "paper", "scissors"]

function computerPlay () {
  return choices[Math.floor(Math.random() * choices.length)];
}
//console.log(computerPlay());



const rock = document.getElementById('rock');
rock.addEventListener('click', game);
// const f = function (x) { return x; }
// function f(x) { return x; }
// game being used like ex. 1 where it is a value
// when rock clicked, game will get called, we only want it called when that event happens

const paper = document.getElementById('paper');
paper.addEventListener('click', game);

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', game);




function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie. Draw again.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Paper covers Rock. Computer wins.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Scissors cuts paper. Computer wins.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Rock smashes scissors. Computer wins.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Rock smashes scissors. You win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Scissors cuts paper. You win!";
  } else {
    return "Paper covers rock. You win!";
  }
}


function game(e) {
  let wincount = 0;
  let losecount = 0;
  let playerSelection = e.target.id
  let computerSelection = computerPlay();
  let playRoundResult = playRound(playerSelection,computerSelection);
  let results = document.getElementById('results');
  results.textContent += playRoundResult;
  if (playRoundResult.includes("You win!")) {
    wincount += 1; 
  } else if (playRoundResult !== "Tie. Draw again.") {
    losecount += 1;
  }

  let score = document.getElementById('score');
  displayScore(wincount, losecount);
  if (wincount > losecount) {
    console.log("You have won the tournament");
  } else if (wincount === losecount) {
    console.log("Tournament is a tie.");
  } else {
    console.log("You have lost the tournament.");
  }
}

function displayScore(wincount, losecount) {
  score.textContent = `${wincount}, ${losecount}`;
}

//all rounds result takes all 5 rounds
//if there are 3 you wins -> champion
// if 3 you lose -> lost
// 



