function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increase = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}


const kraf = new createUser("kraf", 25)
const coding = createUser("coding", 250)

kraf.printMe()



