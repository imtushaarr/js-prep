// const userEmail = "tushar@sts.in"

// if (userEmail) {
//     console.log("got email");
// } else {
//     console.log("dont have user email");
// }

const userEmail = []

if (userEmail) {
    console.log("got email");
} else {
    console.log("dont have user email");
}


// falsey value
// false, 0, -0, bigint 0n, "", null, undefined, NaN.

// truthy value
// "0" (0 under the string), 'flase', " "(space), [], {}, function(){}, 

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}