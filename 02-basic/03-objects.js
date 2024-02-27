// singleton; A singleton is a design pattern that restricts the instantiation of a class to one object.

// object literals

// Object.create //constructer method

const mySym = Symbol("key1")


const JsUser = { //object declear; object literals
    name: "Tushar",
    "full name": "Tushar Gupta",
    [mySym]: "mykeyone",
    age: 22,
    location: "Chandigarh",
    email: "tushar@krafcoding.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// console.log(JsUser.email) // when given dot not using "" these symbole
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log( typeof JsUser[mySym])

JsUser.email = "tushar@seventech.com"
// Object.freeze(JsUser)
JsUser.email = "tushar@google.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello js user");
}

console.log(JsUser.greeting())


JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`); // important
}

console.log(JsUser.greeting2())

const myUser = {
    name: "tushar",
    orderId: 02311,
    orderDate: 21/01/2024,
}

console.log(myUser)

myUser.hellom = function(){
    console.log(`your order is successfully place ${this.name}`)
}

console.log(myUser.hellom())

