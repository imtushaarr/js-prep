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

// console.log(newNums);

const book = [
    {
        title: 'BookOne', genre: 'History', publish: '1998',
        edition: '2001'
    },
    {
        title: 'BookTwo', genre: 'non-History', publish: '1999',
        edition: '2002'
    },
    {
        title: 'BookThree', genre: 'science', publish: '1991',
        edition: '2003'
    },
    {
        title: 'BookFour', genre: 'History', publish: '1993',
        edition: '2004'
    },
    {
        title: 'BookFive', genre: 'science', publish: '1995',
        edition: '2005'
    },
    {
        title: 'BookSix', genre: 'History', publish: '1998',
        edition: '2001'
    }
];

// const userBook = book.filter( (bk) => bk.genre === 'science')

const userBook = book.filter( (bk) => {
     return bk.publish >= 1998 && bk.genre === "History"
    })
console.log(userBook);