// ***** Global Array
const arr = [4,5,7,2,3,1,0,7,10]
const arr2 = [7,8,9,11,12]
// console.log(arr[1]) 

// ******* Push() Method
arr.push(1)
// console.log(arr)

// ****** Pop() Method
arr.pop()
// console.log(arr)

// ****** Concat() Method
let resultArr = arr.concat(arr2)
// console.log(resultArr)

// ******** Unshift() Method
arr.unshift(1)
// console.log(arr)

// ****** Shift() Method
arr.shift()
// console.log(arr)

// ***** Spread Mehtod
// console.log(...arr, ...arr2)

// ****** Map() Method
const mapMethod = arr.map((ele)=>ele + 30)
// console.log(mapMethod)


// **** ParseInt()
// console.log(parseInt("123"))

// ********* Filter() Method
// let filterMethod = arr.filter((ele)=>ele===2 || ele===5)
let filterMethod = arr.filter((ele)=>ele > 2)
// console.log(filterMethod) 

let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
  {
    "color": "green",
    "type": "g wagon",
    "registration": new Date('2014-03-10'),
    "capacity": 9
  },
  {
    "color": "green",
    "type": "station wagon",
    "registration": new Date('2014-03-10'),
    "capacity": 9
  },
]

let filterResult = cars.filter((val)=> { return val.color === "green" && val.type === "station wagon"})
// console.log(filterResult)

//****** Reverse() Method 
let reverseArr = arr.reverse()
// console.log(reverseArr)

// ****** Join() Method
let joinArr = arr.join();
// console.log(joinArr);
// console.log(typeof joinArr);

// let sortMethod = arr.sort();
// console.log(sortMethod);

// ***** sort() Method
let sortMethod = arr.sort((a,b) => b-a)
// console.log(sortMethod);

const ageSort = [{name: "tushar", age: 23, cgpa: 4.6},
                {name: "yash", age: 19, cgpa: 2.3},
                {name: "jatin", age: 67, cgpa: 6.4},
                {name: "puneet", age: 48, cgpa: 9.2}]
                
                let resultSort = ageSort.sort((a,b)=> a.age - b.age);
                
                // console.log(resultSort)
             

// ******* forEach() Method   
// const forEachMethod = arr.forEach((value, index)=>{
    // console.log(`index No. ${index} and Value is ${value}`)
// })

// const forEachMethod = arr.forEach((value) => {
//     if(value < 10){
    //     console.log(value)
    // } else {
    //     console.error("error")
//     }
// });

// arr.forEach((value, index) => {
//     console.log(`Value Of ${value} and index is ${index}`)
// });

const newNums = []
arr.forEach((num) =>{
    if(num > 4){
        newNums.push(num)
    }
})
// console.log(newNums)


// ***** Some() Method
const ages = [12, 23,43,18,34,29]

function adultCheck(ages){
    return 18 <= ages;
}

let resultAge = ages.some(adultCheck)

// console.log(resultAge)


// ****** Every() Method
const noOfAges = [12, 23,43,18,34,29]

function everyMethod(noOfAges){
    return 10 >= noOfAges;
}

let initResult = noOfAges.every(everyMethod)

// console.log(initResult)

// ****** includes() Method
let includeArr = arr.includes(8);
// console.log(includeArr)

// ****** join() Method
let joinMethod = arr.join(",")
// console.log(joinMethod)

// ******* reduce() Method
// accumulator, currentValue, initial Value
const courseList = [
    {
        courseName: "js course",
        price: 1299,
    },
    {
        courseName: "py course",
        price: 11099,
    },
    {
        courseName: "ds course",
        price: 9299,
    },
    {
        courseName: "md course",
        price: 24999,
    },
    ]
    
let totalPrice = courseList.reduce((accu, item) => accu + item.price,0)
// console.log(totalPrice)

// ********* find() method
let findMethod = arr.find((val)=>val<=10)
// console.log(findMethod)

// ****** findIndex() method
let findIndexMethod = arr.findIndex((val)=> val === 0);
// console.log(findIndexMethod)

// ********* indexOf() Method 
// 1 = true, -1=false
let indexOfMethod = arr.indexOf((val)=> val === 21);
// console.log(indexOfMethod);

// fill() Method
const arrFill = new Array(5)
// console.log(arrFill)
// console.log(arrFill.fill(10))

// *********** slice() method
let arr3 = [1,2,3,42,33,12,43,12,4]
// console.log(arr3.slice(2,4))
// console.log(arr3.slice(3,6))

// ******* splice() method
let spliceResult = arr3.splice(4,7)
console.log(spliceResult)
console.log(arr3)
