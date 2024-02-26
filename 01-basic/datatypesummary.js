//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// array always denoted by [] this Symbol 

const heros = ["Tushar", "Puneet", "Yash"];
let myObj = {
    name: "Tushar",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ********** Memory In JavaScript ***********

// The stack is a region of memory used for static memory allocation and dynamic memory allocation.

// he heap is another region of memory used for dynamic memory allocation.

// Stack (Primitive) and Heap (Non Primitive)

let myYoutubeName = "krafcoding"

let anotherName = myYoutubeName
anotherName = "Krafcoding Emmet"

console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
    email: "tusjar@gmail.com"
    // upi: "tushar@ybl"
}

let userTwo = userOne

userTwo.email = "tushar@krafcoding.com"

console.log(userTwo.email)
console.log(userOne.email)