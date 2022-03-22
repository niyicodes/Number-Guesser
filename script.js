/* 
Rules(Game play)
-guess number between min and max num
- the answer is a random number
- 3 guesses
-when game ends (win or lose) the submit button becomes play-again
*/

// Game play
let min = getRandomMin(),
    max = getRandomMax(),
    winningNum = getRandomNum(min, max),
    guesses = 3;


// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-value');
const message = document.querySelector('.message');

// Assigning min and max
minNum.textContent = min;
maxNum.textContent = max;

// Event listener
// Play again listener

game.addEventListener('mousedown', function(e){
   if(e.target.className === 'playAgain'){
      window.location.reload();
   }

})

// submit listener
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value); 

   // Validation of input box
   if(isNaN(guess) || guess < min || guess > max){
      setMessage(`Please enter values between ${min} and ${max}`,'red');
   }else if(guess === winningNum){
      // Game Over- Won
      gameOver(true, `You guessed right!, YOU WON!`)
   } else {
      // reduce the guesses left
      guesses -= 1;
      
      if(guesses === 0){
         // Game Over - Lost

         gameOver(false, `You Lost, the winning number is ${winningNum}. Try Again`);
      } else {
         // Game continues

         // change border color
         guessInput.style.borderColor = 'red';

         // clear input
         guessInput.value = '';

         // 
         setMessage(`${guess} is not correct, You have ${guesses} guess(es) left`, 'red')
      }

   }
});


// Functions

function gameOver(won, msg){
   let color;
   won === true ? color = 'green' : color = 'red';
   // if(won === true){
   //    color ='green';
   // } else {
   //    color = 'red';
   // }

   // disable input
   guessInput.disabled = true;
   // change input color
   guessInput.style.borderColor = color;
   // Text color
   message.style.color = color;


   // change submit to Play-AGAIN
   guessBtn.className += 'playAgain';
   guessBtn.value = 'Play Again';

   setMessage(msg)
};

function getRandomNum(min, max){
  return Math.floor((Math.random() * ((max-min) + 1)));
}

function getRandomMin(min){
   return Math.floor((Math.random() * 5) + 1)
}

function getRandomMax(max){
   return Math.floor((Math.random() * 24) + 1)
}

function setMessage(msg, color){
   message.style.color = color;
   message.textContent = msg;
};