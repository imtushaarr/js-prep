const user = {
    username: "tushar",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website.`);  //current context
        // console.log(this) // this is for current value
    }
}

// user.welcomeMessage()
// user.username = "Tush" //context
// user.welcomeMessage()
// console.log(this);

// function kraf(){
//     let username = "tushar"
//     console.log(this.username)
// }
// kraf()

// const kraf = function() {  
//     let username = "tushar"
//     console.log(this.username)
// }
// kraf()

// const kraf = () => {  //=> that is arrow function
//     let username = "tushar"
//     console.log(this.username)
// }
// kraf()

// const addTwo = (num1, num3) => { //parentheses
//     return num1 + num2
// }
// const addTwo = (num1, num3) => return num1 + num2 
// const addTwo = (num1, num3) => num1 + num2
// const addTwo = (num1, num3) => (num1 + num2)
const addTwo = (num1, num3) => ({username: "tushar"})


console.log(addTwo(3,4))