const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');
const resetButton = document.getElementById('reset');

const generateChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return `It's a tie!`;
  }
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  }
  computerScore++;
  return 'Computer wins!';
};

const updateScore = () => {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
};

const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerChoice = button.textContent.toLowerCase();
    const computerChoice = generateChoice();

    // Determine and display the result
    const result = determineWinner(playerChoice, computerChoice);
    resultDisplay.textContent = `You chose: ${playerChoice}. Computer chose: ${computerChoice}. ${result}`;

    // Update score
    updateScore();
  });
});

// Reset button to restart the game
resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultDisplay.textContent = 'Game reset! Choose your move.';
});
