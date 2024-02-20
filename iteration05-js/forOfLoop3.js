// For Of Loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {  // iterator = i (like that index); object is kis chiz ke uper loop lagana h
    // console.log(i);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// maps:- its ike array (unique value)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'SM'
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


