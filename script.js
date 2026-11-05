const randomnumber=Math.floor(Math.random()*100)+1;
let Attempts= document.getElementById('Attempts');
let Attempt=0;
const guessInput=document.getElementById('guessInput');
const checkguess=document.getElementById('checkGuess');
const startButton=document.getElementById('message');
checkGuess.addEventListener('click',()=> {
    guess = parseInt(guessInput.value);
    Attempt ++;
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'red';
        Attempts.textContent = `you tried ${Attempt} times`;
    }else if (guess === randomnumber) {
        message.textContent = 'Congratulations! You guessed the number!';
        message.style.color = 'green';
        Attempts.textContent = `you tried ${Attempt} times`;
    }else if (guess < randomnumber) {
        message.textContent = 'Try a higher number!';
        message.style.color = 'purple';
        Attempts.textContent = `you tried ${Attempt} times`;
    }else {
        message.textContent = 'Try a lower number!';
        message.style.color = 'blue';
        Attempts.textContent = `you tried ${Attempt} times`;
    }
    guessInput.value = '';
});