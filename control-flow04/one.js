// Control flow (Logic flow) basically, code run by condition
// In JavaScript (JS), control flow refers to the order in which statements are executed in a script.


// if (condition){  // cerlibreses {} that is scope

// }

// if (true){  

// }
// if (false){  

// }

// const isUserloggedIn = true
// const temperature = 41
// if (temperature < 50){
//     console.log("less then 50")
// } else{
//     console.log("temp is greater then 50")
// }
// console.log("EXECUTED")  // after if else last console alway execute

// if (2 === "2"){  
//     console.log("executed")
// } 

// 2<=2
// <,>,<=,>=,==(equal) , !=(not equal), == (triple equal, check for strick and typeof)

// const score = 200
// // const power = "fly"
// if (score > 100){
//     const power = "fly"
//     console.log(`User Power ; ${power}`)
// }
// console.log(`User Power ; ${power}`)



// sort hand notation
const balance = 1000

// if (balance > 500) console.log("test"),
// console.log("test2")  //unreadable code

// nexting // use for mutiple condition
// if (balance > 500) {
//     console.log("less then 500")
// } else if (balance < 750){
//     console.log("less then 750")
// } else if(balance < 900){
//     console.log("less then 900")

// } else {
//     console.log("less then 1200")
// }

// if (balance < 200){
//     console.log("yes")
// } else {
//     console.log("no")
// }


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==2){  // && its means "And"
    console.log(" Allow to buy courses")
}

if (loggedInFromGoogle || loggedInFromEmail){   // pipe sign || its means "or"
    console.log("user logged in")
}
