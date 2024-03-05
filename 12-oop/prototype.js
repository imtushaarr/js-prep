// let myName = "tushar   "

// console.log(myName.length);

let myName = ["Tushar", "Agustya", "Tush"]

let nameIdentity = {
    characters: "atoz",
    item: "three",

    getItem: function(){
        console.log(`Tushar Characters are ${this.characters}`);
    }
}

Object.prototype.tushar = function(){
    console.log(`tushar is present in all object`);
}

Array.prototype.heyTushar = function(){
    console.log(`Tushar says hello`);
}

// nameIdentity.tushar()
// myName.heyTushar()
// nameIdentity.tushar()
// myName.heyTushar()


// ************** inheritance ****************

const user = {
    name: "Tush",
    email: "tush@krafcoding.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SevenTechService     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tush".trueLength()
"krafcoding".trueLength()


let someAnotherUsername = "krafcool     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

someAnotherUsername.trueLength()