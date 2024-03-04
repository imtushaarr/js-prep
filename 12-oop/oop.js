const user = {
    username: "tushar",
    logInCount: 8,
    signIn: true

}

// console.log(user.username);



// *********Constructor function*********

// const promise = new Promise()      // new keyword that is called Constructor 

function User(username, logincount, isLoggedIn){
    this.username = username
    this.logInCount = logincount
    this.isLoggedIn = isLoggedIn

    this.gretting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User("tushar", 12, true)
const userTwo = new User("krafcoding", 11, false)
console.log(userOne);
console.log(userTwo);

