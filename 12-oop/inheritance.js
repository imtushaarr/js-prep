class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tushar = new Teacher("Tushar", "tushar@teacher.com", "123")

tushar.logMe()
const agustya = new User("agutsya")

agustya.logMe()

console.log(tushar instanceof User);