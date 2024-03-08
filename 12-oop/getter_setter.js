class User{
    constructor(name, email, password){
        this.password = password;
        this.email = email;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}`
    }

    set password(value){
        this._password = value;
    }
}

const tushar = new User("tushar", "t@tushar.com", 123)
console.log(tushar.email);
console.log(tushar.password);