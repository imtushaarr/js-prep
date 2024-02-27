// var c = 300 //global scope
let a = 300
if (true){  //block scope
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "tushar"

    function two(){
        const website = "GitHub"
        console.log(username);
    }
    // console.log(website);
    // two()
}
one()

if(true){
    const username = "tushar"
    if(username === "tushar"){
        const website = " Github"
        // console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);



// interesting **************************

console.log(addone(5))
function addone (num){ //function
    return num + 1
}


addtwo(5)
const addtwo = function(num){   // function and also expression
    return num + 2
}

