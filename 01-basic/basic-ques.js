// 1. write a javascrpt program to check two number and return true if one of the number is 100 or if the sum of the two number is 100. 
// const isEqualTo100 = (a,b) => a === 100 || b === 1000;
// console.log(isEqualTo100(100,0));
// console.log(isEqualTo100(0,100));
// console.log(isEqualTo100(10,0));
// console.log(isEqualTo100(0,200));

// create a 6 digit otp generate through random number
function generateOTP(limit){
    var digit = '0123456789';
    let OTP = ''
    for(let i=0; i<limit; i++){
        OTP =+ digit[Math.floor(Math.random()*10)];
    }
    return OTP;
}

console.log("welcome to Krafcoding Your six digit OTP is :", generateOTP(7));

// function generateOTP(limit){
//     var digit = '0123456789';
//     let OTP = ''
//     for (let i=0; i<limit; i++){
//         OTP =+ digit[Math.floor(Math.random()*10)];
//     }
//     return OTP;
// }
// console.log("Random Number Generator :", generateOTP(6) );