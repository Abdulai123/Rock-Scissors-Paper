const playerResult = document.getElementById('playerResult');
const computerResult = document.getElementById('computerResult');
const game = document.getElementById('game')
const gameComplement = document.getElementById("gameComplement");
const choices = ['rock', 'paper', 'scissors'];

let userChoice;
let computerChoice;

const handleClick = (e) => {
  userChoice = e.target.id
  generateComputer()
  playRound()
}

const generateComputer = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
}

//counter 

let playerCount = 0;
let computerCount  = 0;

//create 3 buttons in the DOM
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button')
  //cretae buttons id
  button1.id = "rock" ;
  button2.id = "paper";
  button3.id = "scissors";
  // you can delete this id you want to use e.target.HTML in the handleClick
  //create innerHTML or innerText
  button1.innerHTML = "Rock"
  button2.innerHTML = "Paper";
  button3.innerHTML = "Scissors";
  //addEventListener to the buttons 
  button1.addEventListener('click', handleClick);
  button2.addEventListener("click", handleClick);
  button3.addEventListener("click", handleClick);
  //appends all buttons
  game.append(button1,button2,button3);

//function to disable the Buttons
function disableButtons(){
  button1.disabled = true;
  button2.disabled = true; 
  button3.disabled = true;
};
//logic to check the player and the computer selection
const playRound = () => {
    if(userChoice + computerChoice == 'scissorspaper' || userChoice + computerChoice == 'rockscissors' || userChoice + computerChoice == 'paperrock') {
      playerResult.innerText = playerCount += 1;
      if(playerCount === 1){
        gameComplement.innerText = "Good it\'s remain 4 more points for mankind\'s to won the race.";
      }else if(playerCount === 2){
        gameComplement.innerText = "You are doing great it\'s remain 3 more points for mankind\'s to won the race.";
      }else if(playerCount === 3){
        gameComplement.innerText = "Well done it\'s remain 2 more points for mankind\'s to won the race.";
      }else if(playerCount === 4){
        gameComplement.innerText = "Wow you are so great at playing this game it\'s remain 1 more point for mankind\'s to won the race of technology.";
      }else if(playerCount === 5){
       gameComplement.innerText = `Wow Congratulations 🎊  you won the game by ${playerCount - computerCount}, Restart below to play again please. \n THE RESULT \n ${computerCount} - ${playerCount}`;
       disableButtons();
      };
    }else if(userChoice + computerChoice == 'paperscissors' || userChoice + computerChoice == 'scissorsrock' || userChoice + computerChoice == 'rockpaper'){
   computerResult.innerText = computerCount += 1;
      if(computerCount === 1){
        gameComplement.innerText = "Computer got 1 point, It\'s remain 4 Chance for mankind\'s to lose the race";
      }else if(computerCount === 2){
        gameComplement.innerText = "Please don't let mankind\'s lose this race, it\'s remain 3 more chance for mankind, losing the race.";
      }else if(computerCount === 3){
        gameComplement.innerText = "Please save mankind\'s we are suffering, computer is damn... wicked it\'s remain 2 more chance for mankind's to lose the race.";
      }else if(computerCount === 4){
        gameComplement.innerText = "Oops mankind\'s you only have 1 chance to lose the race of technology."
      }else if(computerCount === 5){
       gameComplement.innerText = `Sorry mankind\'s, Computer won the game by ${computerCount - playerCount} , Restart below to play again please.\n THE RESULT \n ${computerCount} - ${playerCount}`;
       disableButtons();
      };
    }else{
      if(userChoice + computerChoice == 'scissorsscissors' || userChoice + computerChoice == 'rockrock' || userChoice + computerChoice == 'paperpaper'){
        gameComplement.innerText = "Oops it\'s a tie between mankind\'s and Computer";
        };
    };
};