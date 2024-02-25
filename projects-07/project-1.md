# Project related to DOM

## Project Link
[Click Here](https://github.com/imtushaarr/js-prep/tree/main/projects-07/1-colorChanging)

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