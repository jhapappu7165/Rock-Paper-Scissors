let score = JSON.parse(localStorage.getItem('score'));
      
if (score === null) {  
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

function updateScoreElement() {//updated score in webpage
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
}
updateScoreElement(); //updated score in webpage



let isAutoPlaying = false;
let intervalID;

/* ARROW FUNCTION VERSION of below function autoPlay()-NOT recommend
const autoPlay = () => {
...
};*/


function autoPlay() {

  if (!isAutoPlaying) { //once button clicked, start autoPlay

    intervalID = setInterval(() => { //ARROW FUNCTION 
      const playerMove = pickComputerMove();  
      playGame(playerMove);
    }, 1000);   //setInterval() returns a unique ID

    isAutoPlaying = true;
    console.log(intervalID);
  }

  else { //when button clicked again, isAutoPlaying=true,so stop
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}



document.querySelector('.js-rock-button')
  //write a function as 2nd parameter, not call an existing function
  .addEventListener('click', () => { 
    playGame('rock');
  });


document.querySelector('.js-paper-button')
  .addEventListener('click', () => { 
    playGame('paper');
  });



//document.body refers to <body> element of HTML 
//Play Game with keyboard, instead of clicking on button
document.body.addEventListener('keydown', (event) => {
  if ((event.key === 'r') || (event.key === 'R')) {
    playGame('rock');
  }
  else if ((event.key === 'p') || (event.key === 'P')) {
    playGame('paper');
  }
  else if ((event.key === 's') || (event.key === 'S')) {
    playGame('scissors');
  }
});



function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove == 'scissors') {
    if (computerMove === 'rock') {
    result = 'You lose.';
    }
    else if (computerMove === 'paper') {
      result = 'You win.';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie.';
    }          
  }

  else if (playerMove == 'paper') {

    if (computerMove === 'rock') {
      result = 'You win.';
    }
    else if (computerMove === 'paper') {
      result = 'Tie.';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }

  else if (playerMove == 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    }
    else if (computerMove === 'paper') {
      result = 'You lose.';
    }
    else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  }
  else if (result === 'You lose.') {
    score.losses += 1;
  }
  else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score)); //score updates in local storage

  updateScoreElement(); //updated score on webpage
  updateResult(); //updated result on webpage






  function updateResult() { //updated result on webpage
    document.querySelector('.js-result').innerHTML = `Result: ${result}`;
    document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
  }

  /*    
    //updated score in pop-up
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
}


function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}
