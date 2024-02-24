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
