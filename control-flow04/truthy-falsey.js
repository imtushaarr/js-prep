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


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);