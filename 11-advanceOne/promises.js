const promiseOne = new Promise(function(resolve, reject){         // promise get direct object
    // Do an async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()    // that is use to connect .then
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("Promise consumed");
})

// combine both, both are same

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})