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