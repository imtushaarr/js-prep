// const krafcodingUser = new Object()

const krafcodingUser = {}

krafcodingUser.id = "123abc"
krafcodingUser.name = "Tushar"
krafcodingUser.isLoggedIn = false

// console.log(krafcodingUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tushar",
            lasrname: "Gupta"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const objt1 = {1: "a", 2: "b"}
const objt2 = {3: "a", 4: "b"}
const objt4 = {3: "a", 4: "b"}

// const objt3 = {objt1, objt2};
// const objt3 = Object.assign({}, objt1, objt2, objt4)

const objt3 = {...objt1, ...objt2}
// console.log(objt3);

const users = [ //objects under the array
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    }
]

users[1].email
// console.log(krafcodingUser);

// console.log(Object.keys(krafcodingUser));  //important
// console.log(Object.values(krafcodingUser));
// console.log(Object.entries(krafcodingUser));  

console.log(krafcodingUser.hasOwnProperty('name'));



