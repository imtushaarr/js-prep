const heros = ["salman", "srk", "hritik"]
const heroin = ["deepika", "katrina", "kareena"]

// heros.push(heroin)
// console.log(heros[1]);

// const allheros = heros.concat(heroin)
// console.log(allheros)

const allheros = [...heros, ...heroin]
// console.log(allheros)

const anotherArr = [1, 2, 3, [4, 5, 6], [6, 7], [4, 5]]
let realanotherarr = anotherArr.flat(Infinity)
// console.log(realanotherarr)


// console.log(Array.isArray("Tushar"))
// console.log(Array.from("Tushar"))
// console.log(Array.from({name: "tushar"})) // ineresting; attempts to create an array from an object.

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6






