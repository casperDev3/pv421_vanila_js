// ----- LOGs ---------
// alert("Hello World!");
// console.log('Hello World!');
// console.warn("Warning: Hello World!");
// console.error("Error: Hello World!");
//
// console.info("Info: Hello World!");
// console.table({
//     "1": "Hello World!",
// })
// console.time("Hello World!")
// console.timeEnd("Time Stamp");
//
// console.clear()

// --------- VARIABLES & CONSTANTS --------
// Init
// const someConstant = 12;
// let varOne;
// varOne = 'Lorem Ipsum';
// let varTwo = 'Lorem Ipsum 2';

// console.log(typeof textOne); // detect type of data

// ######## PRIMITIVES (string, number, bool, unfounded, null)
// String
let textOne = "Hello World";
let textTwo = `It's first program: ${textOne}`;
let textThree = `3`;
// console.log(textTwo);

// Methods for string
// console.log(textOne[0]); // first letter
// console.log(textTwo.at(-1)); // last letter
// console.log(textOne.toUpperCase()); // upper case
// console.log(textTwo.toLowerCase()); // lower case

// console.log(textOne.replace("H", "G")); // replace value
// console.log(textOne.indexOf("e")); // find index
// console.log(textOne.includes("l")); // check if exist

// Number
let numOne = 8
let numTwo = 8.26
// console.log(typeof numOne)
// console.log(typeof numTwo)

// operators - присвоєння
// console.log(numOne + numTwo)
// console.log(numOne - numTwo)
// console.log(numTwo * numTwo)
// console.log(numOne / numTwo)
// console.log(numOne ** 2)
// console.log(numTwo % 2)
// console.log(numOne++) // decrement
// console.log(numTwo--) // increment
// console.log(numOne += 5)
// console.log(numTwo -= 7)
// console.log(numOne *= 2)
// console.log(numTwo /= 3)

// const resultDivisor = (numOne / numTwo).toFixed(3)
// console.log(resultDivisor)

// operators - порівняння
// console.log(numOne, numTwo)
// console.log(numOne == numTwo)
// console.log(numTwo === numOne)
// console.log(numOne > numTwo)
// console.log(numOne >= numOne)
// console.log(numOne <= numTwo)
// console.log(numOne >= numTwo)
// console.log(numOne != numOne)
// console.log(numOne !== numTwo)

// const textThree = textOne + textTwo; // concatenation
// console.log(textThree);

// exceptions
// console.log("9" - 2) // 7 - number
// console.log(9 - "2") // 7 - number
// console.log(9 + "2") // 92 - string
// console.log("9" + 2) // 92 - string

// transform types
// console.log(typeof numOne.toString())
// console.log(typeof Number(textThree))
// console.log(Number(textTwo))

// Null
// let emptyVal = null;

// Boolean
// let boolVal = true;
// let boolVal2 = false;

// ######## COMPLEX TYPES (Array, Object, Function, Class / Prototype) ######
let arrayOne = ["A", "B", "C", 2, true];
let arrayNums = [1, 4, 3, 2, 5, 6, 8, 7, 9, 10];
// console.log(arrayOne[0]); // first
// console.log(arrayOne.at(-1)); // last
// console.log(arrayOne.length); // length Array

// arrayOne.push(6) // add to end array
// arrayOne.unshift(3) // add to start array
// arrayOne.pop() // delete 1 item from end
// arrayOne.shift() // delete 1 item from start


// console.log(arrayOne.indexOf("B")); // find index
// console.log(arrayOne.splice(arrayOne.indexOf("B"), 1)); // remove by index
// console.log(arrayNums.sort(
//     (a, b) => a - b
// )); // ASC
// console.log(arrayNums.sort(
//     (a, b) => b - a
// )); // DESC

// console.log(arrayNums.filter(x => x <= 5));
// TODO: Check clear
// arrayOne.clear()
// console.log(arrayOne)

// ----- Object ----
// let objOne = {
//     id: 1,
//     name: "A",
//     age: 4,
//     price: 5,
// }
// console.log(objOne.name)
// objOne.sound = "Haw"
// delete objOne.age
// console.log(objOne)

const userData = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        password: "password@gmail.com",
        city: "city@gmail.com",
        state: "state@gmail.com",
    },
    {
        id: 2,
        name: "John",
        email: "john@gmail.com",
        password: "password@gmail.com",
        city: "city@gmail.com",
        state: "state@gmail.com",
    }
]


