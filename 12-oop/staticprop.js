class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    createID(){
        return 123
    }
}

const tushar = new User("tushar")
// console.log(tushar.createID);

class Teachers extends User{
    constructor(username, email,){
        super(username)
        this.email = email;
    }
}


const iphone = new Teachers("iphone", "i@phone.com")
console.log(iphone.createID);
