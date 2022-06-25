function computerPlay() {
    const values = ['rock', 'paper', 'scissors'];
    let randomGenerator = Math.floor(Math.random() * 3);
    let generateValues =  values[randomGenerator];
    return generateValues;
};

function playRound(playerSelection, computerSelection) {
    let playerWin = `You Win! ${playerSelection} beats ${computerSelection}.`;
    let computerWin = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    let drawWin = `${computerSelection} is equal to ${playerSelection}, Try again.`
    switch (true) {
        case playerSelection == 'rock' && computerSelection == 'scissors':
        case playerSelection == 'scissors' && computerSelection == 'paper':
        case playerSelection == 'paper' && computerSelection == 'rock':
             return playerWin;
        case playerSelection == 'rock' && computerSelection == 'rock':
        case playerSelection == 'scissors' && computerSelection == 'scissors':
        case playerSelection == 'paper' && computerSelection == 'paper':
             return drawWin;
         default:
             return computerWin;
    };


  };
  let playerValue = 'PAPER';
  const playerSelection = playerValue.toLowerCase();
  const computerSelection = computerPlay();
  
  function game() {
    let playerRounds = playRound(playerSelection, computerSelection);
    count = 0;
    for (let i = 0; i < 5; i++) {
       return playerRounds;
    };
  };

console.log(game());
  