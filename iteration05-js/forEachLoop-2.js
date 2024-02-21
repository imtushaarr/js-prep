const coding = ["js", "py", "java", "c", "c++"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})
// console.log(values);   // forEach never return values

const myNum = [1,2,3,4,5,6,7,8,9]

// let newNums = myNum.filter( (num) => num > 4)   // you can define arrow function like => either {} like this.
// let newNums = myNum.filter( (num) => {
//     num > 4   // like this function 
// })

const newNums = []
myNum.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums);