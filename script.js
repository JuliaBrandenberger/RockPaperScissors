
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

let wincount = 0;
let losecount = 0;

function game(e) {
  let yourScore = document.getElementById('yourScore');
  let computerScore = document.getElementById('computerScore');
  let playerSelection = e.target.id
  let computerSelection = computerPlay();
  let playRoundResult = playRound(playerSelection,computerSelection);
  let results = document.getElementById('results');
  if (playRoundResult.includes("You win!")) {
    wincount += 1; 
    yourScore.textContent = wincount;
  } else if (playRoundResult !== "Tie. Draw again.") {
    losecount += 1;
    computerScore.textContent = losecount;
  } 
  results.textContent = playRoundResult;
  displayScore(wincount, losecount);

  //let finalResults = document.createElement("p");
  //finalResults.textContent = "Tournament Results:";

  if (wincount === 5) {
    document.body.appendChild(tournamentResults);
    tournamentResults.appendChild(winner);
    muteButtons();
    document.body.appendChild(tryAgain);

  } else if (losecount === 5) {
    document.body.appendChild(tournamentResults);
    tournamentResults.appendChild(loser);
    muteButtons();
    document.body.appendChild(tryAgain);

    }

  tryAgain.addEventListener('click', reset);
}

function muteButtons() {
  rock.removeEventListener('click', game);
  rock.classList.add('disabled');
  paper.removeEventListener('click', game);
  paper.classList.add('disabled');
  scissors.removeEventListener('click', game);
  scissors.classList.add('disabled');

}

let tryAgain = document.createElement('button');
tryAgain.classList.add('tryAgain');
tryAgain.innerHTML = "Try Again";

let tournamentResults = document.createElement('div');
tournamentResults.classList.add("tournament-results");
tournamentResults.innerHTML = "Tournament Results:"

let winner = document.createTextNode("  You have won the match");
let loser = document.createTextNode("  You have lost the match");


function reset() {
  document.body.removeChild(tryAgain);
  document.body.removeChild(tournamentResults);
  tournamentResults.removeChild(tournamentResults.childNodes[1]); // d
  results.textContent = "";
  wincount = 0;
  losecount = 0;
  yourScore.textContent = wincount;
  computerScore.textContent = losecount;
  tally.textContent = `${wincount}, ${losecount}`;
  rock.addEventListener('click', game);
  rock.classList.remove('disabled');
  paper.addEventListener('click', game);
  paper.classList.remove('disabled');
  scissors.addEventListener('click', game);
  scissors.classList.remove('disabled');

}

let tally = document.getElementById('tally');
function displayScore(wincount, losecount) {
  tally.textContent = `${wincount}, ${losecount}`;
}
//displayScore(wincount, losecount);

function displayTournScore(wincount, losecount) {
  if (wincount > losecount) {
    console.log("You have won the tournament");
  } else if (wincount === losecount) {
    console.log("Tournament is a tie.");
  } else {
    console.log("You have lost the tournament.");
  }
}





//all rounds result takes all 5 rounds
//if there are 3 you wins -> champion
// if 3 you lose -> lost
// 



