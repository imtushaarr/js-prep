const promiseOne = new Promise(function(resolve, reject){         // promise get direct object
    // Do an async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        // console.log('Async task is completed');
        resolve()    // that is use to connect .then
    }, 1000)
}) 

promiseOne.then(function(){
    // console.log("Promise consumed");
})

// combine both, both are same

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolve");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Tushar", email: "tushar@krafcoding.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "tushar", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})