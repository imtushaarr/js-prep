const clock = document.getElementById('clock');



setInterval( function () {     //setInterval kehta h koi ek method dedijiye or intervel bta dijiye jb tk chlta rahe ga
    let date = new Date();
    // console.log(date.toLocaleString())
    clock.innerHTML = date.toLocaleString();
}, 1000)        