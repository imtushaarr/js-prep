// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username; // Fixing the typo here
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}tus`; // Adding semicolon at the end
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }

// }

// const tush = new User("kraf", "kraf@gmail.com", "vjcskc12m"); // Capitalized User class name
// console.log(tush.encryptPassword()); // Calling encryptPassword instead of encryptpassword
// console.log(tush.changeUserName());


// Behind the scene

function User(username, email, password){
    this.username = username; // Fixing the typo here
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}tus`;
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const tush = new User("kraf", "kraf@gmail.com", "vjcskc12m"); // Capitalized User class name
console.log(tush.encryptPassword()); // Calling encryptPassword instead of encryptpassword
console.log(tush.changeUserName());