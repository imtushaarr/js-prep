// Immediately Invokeed Function Expression (IIFE)

(function kraf(){
    // named iife
    console.log(`DB CONNECTED`)
})(); //() that means execution
// ; in this symbol used mainly in this situation for closed one code to start other code
( (name) => {
    console.log(`DB CONNECTED ${name}`)
})(`tushar`)