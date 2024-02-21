// ForEach Loop

const coding = ["js", "py", "java", "c", "c++"]

coding.forEach( function (item) {  
    // console.log(item);
})

coding.forEach( (item) =>  {    //in this function called callback function
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {     // item, index, list of array
    // console.log(item, index, arr);
})

// [{}, {}, {}]

const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageFileName);
    // console.log(item.languageName);
    // console.log(`languageName : ${item.languageName} and languageFileName: ${item.languageFileName}`);

})