// setting the variables needed

let min = 2,
    max = 12,
    rightNum = randomWinningNum(min, max),
    guessesLeft = 3;

//  UI variables
const games = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

// Play again function

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'playAgain'){
    window.location.reload();
  }
})

// listen for events
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value)
  console.log(guessInput.value);
  // what happens when the submit button is clicked

  if (isNaN(guess) || guess < min || guess > max){
    outputMessage(`Please input a number between the ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === rightNum){

    gameover(true, `${rightNum} is the correct number, YOU WON!!`);
    /*
    // disable input
    guessInput.disabled = true;
    // change the color of the input border
    guessInput.style.borderColor = 'green';
    // set message
    outputMessage(`${rightNum} is the correct number, YOU WON!!`, 'green');
    */
  } else {
    guessesLeft -=1
    if (guessesLeft === 0){
      // Game Over
      gameover(false,`Game Over, YOU LOST. The correct number is ${rightNum}`);

    } else {
      // Game continues

      // change the color of the input border
      guessInput.style.borderColor = 'orange';
      // clear input
      guessInput.value = '';
      // set message
      outputMessage(`${guess} is wrong, you have ${guessesLeft} guess(es) left`, 'orange');

    }
  }
});

// Game Over Function
function gameover(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // disable input
  guessInput.disabled = true;
  // change the color of the input border
  guessInput.style.borderColor = color;
  // set message
  outputMessage(msg);

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'playAgain';
}

// Random winning num

function randomWinningNum(min, max) {
 return Math.floor(Math.random()*(max-min+1) + min);

};

// Message function
function outputMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}