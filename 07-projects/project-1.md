# Project related to DOM

## Project Link
[colorChanging](https://github.com/imtushaarr/js-prep/tree/main/projects-07/1-colorChanging)
</br>
[BMICalculator](https://github.com/imtushaarr/js-prep/tree/main/projects-07/2-BMICalculator)
</br>
[digitalColor](https://github.com/imtushaarr/js-prep/tree/main/projects-07/3-digitalColor)
</br>
[GuessNumbe](https://github.com/imtushaarr/js-prep/tree/main/projects-07/4-GuessNumber)
</br>
[KeyBoard Check]([https://github.com/imtushaarr/js-prep/tree/main/projects-07/4-GuessNumber](https://github.com/imtushaarr/js-prep/tree/main/10-eventProject/KeyBoard%20Check)
</br>
[Unlimited Color]([https://github.com/imtushaarr/js-prep/tree/main/projects-07/4-GuessNumber](https://github.com/imtushaarr/js-prep/tree/main/10-eventProject/Unlimited%20Color)

# Solution code

## Project 1

```javascript
console.log('imtushaarr')
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'gray') {
            body.style.backgroundColor = "gray";
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = "yellow";
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = "blue";
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = "red";
        }
    });
});

```

## Project 2

```javascript
console.log('imtushaarr')
const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();

   const height  = parseInt( document.querySelector('#height').value);
   const weight  = parseInt( document.querySelector('#weight').value);
   const result  = document.querySelector('#result');


    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid Hegiht : ${height}`
    } else if ( weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight : ${weight}`
    } else {
       const bmi = (weight / ((height*weight)/10000)).toFixed(3)  //ToFixed use for, when ever getting long no. it help to reduce.
        result.innerHTML = `<span>Your BMI Value is : ${bmi}</span>`
    }
});

```

## Project 3

```javascript
console.log('imtushaarr')
const clock = document.getElementById('clock');

setInterval( function () {     //setInterval kehta h koi ek method dedijiye or intervel bta dijiye jb tk chlta rahe ga
    let date = new Date();
    // console.log(date.toLocaleString())
    clock.innerHTML = date.toLocaleString();
}, 1000)      

```

## Project 4

```javascript
console.log('imtushaarr')
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
```


## Project 5

```javascript
    const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
            <table>
        <tr>
            <th>key</th>
            <th>keycode</th> 
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td> 
            <td>${e.code}</td>
        </tr>
</table>
    </div>
    `
})
```

## Project 6

```javascript
    // Generate a random color
const randomColor = function() {
    const hex = "0123456789ABCDEF"; // Corrected hex string
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const startChangingColor = function() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
};

function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
