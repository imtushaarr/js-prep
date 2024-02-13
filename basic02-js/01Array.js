// Array

/*The Array object, as with arrays in other programming languages, enables 
storing a collection of multiple items under a single variable name, and 
has members for performing common array operations.*/

// JavaScript arrays are resizable and can contain a mix of different data types. 
// JavaScript arrays are not associative arrays.
// JavaScript array-copy operations create shallow copies.


// array always be denoted by [] these symbol.

// const myArr = [0,1,2,3,4,5]
// const myHeros = ["Tushar", "Tushar02"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

// Array Methods

// myArr.push(6) // using for add extra value
// myArr.push(7)
// myArr.pop() // using for remove velue

// myArr.unshift(9) // usig for add value from start
// myArr.shift()

// console.log(myArr.includes(9)) // finding these value available in array
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(newArr)
// console.log(myArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3) // not adding last value after 3

// console.log(myn1)
// console.log("B ", myArr)

// const myn2 = myArr.splice(1,3)
// console.log("c ", myArr) // adding last value after 3
// console.log(myn2);

// Result :
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]





