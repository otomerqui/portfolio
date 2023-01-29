let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = function() {
  return Math.floor(Math.random()*10);
};

const compareGuesses = function(humanGuess,computerGuess,targetNumber) {
  if (Math.abs(computerGuess - targetNumber) >= Math.abs(humanGuess - targetNumber)) {
    return true;
  } else {
    return false;
  }
};

const updateScore = function(winner) {
  if (winner === 'human') {
    humanScore +=1;
  } else if ( winner === 'computer') {
    computerScore +=1;
  }
};

const advanceRound = function() {
  currentRoundNumber +=1;
};