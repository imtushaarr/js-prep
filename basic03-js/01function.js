// Function

function sayMyName(){
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //(number1, number2) parameters
    
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // 3, 4 arguments

function addTwoNumbers(number1, number2){ //(number1, number2) parameters
    
    // let result = number1 = number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);


function loginUserMessage(username){
// function loginUserMessage(username = "Tushar"){
    if(username === undefined){
        console.log("Please Enter A Username");
        return
    }
    return `${username} Just logged in`
}

// console.log(loginUserMessage("Tushar"))
// console.log(loginUserMessage())



function calculateCartPrice(val1, val2, ...num1){  // that is called rest operator
    return num1
}

// console.log(calculateCartPrice(200,300,400,2000))

const user = {  //object create
    username: "Tushar",
    price: 199
}

function handleObject(anyobject){ //function create
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({ //direct object pass
    username: "Tushar",
    price: 199
})

// passing arrays

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));








// links : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

