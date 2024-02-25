let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess){    //method
    if(isNaN(guess)){
        alert('Please enter a vaild number')
    } else if(guess<1){
        alert('Please enter a vaild number')
    } else if(guess>100){
        alert('Please enter a less then 100')
    } else{
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random no was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            ckeckGuess(guess)
        }
    }
}

function ckeckGuess(guess){ 
    if (guess === randomNumber){
        displayMessage(`You guessed right`)
        endGame()
    } else if(guess<randomNumber){
        displayMessage(`Number is too low.`)
    } else if(guess>randomNumber){
        displayMessage(`Number is too high.`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    lastResult.innerHTML = `${12 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h5 id="newGame">Start New Game!</h5>`
    p.style.cursor = 'pointer';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${12 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}





