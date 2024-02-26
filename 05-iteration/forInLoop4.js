// forin loop

const myObject = {
    py: "python",
    jv: "java",
    r: "ruby",
    js: "javascript"
}

for (const key in myObject) {
    // console.log(myObject);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut for ${myObject}`);
}

for (const key in myObject) {
    // console.log(key)
}

const programming = ["js", "jv", "py", "r"]

for (const key in programming) {
    // console.log(key)
    // console.log(programming)
}

const map = new Map()  // map is not ireratable so result is empty.
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")

for (const key in map) {
    // console.log(map);
}


