const firstName = "Senghort";

let age = 35
let gender = "M"
let greeting = `Hello, ${firstName}`

let heigh
let heighInFeet = 5
let inches = 2

console.log(heigh)
heigh = heighInFeet * 12
heigh += inches
heigh = heigh + inches

console.log(heigh)

console.log(firstName, age, gender)
console.log(greeting)

let isCool = true

let tempList = `Hi, my name is ${firstName}! I am ${age} years old and it is ${isCool} that I am cool.`

console.log(tempList)

let score = 115
let score2 = 115
if (score !== score2) {
    console.log("First score is bigger or equal.")
} else {
    console.log("Second score is bigger.")
}

let num1 = 20
let num2 = 30 

let sum = num1 + num2
let sub = num1 - num2
let mul = num1 * num2
let div = num1 / num2
let mod = num1 % num2;

let increment = 5
++num1
let decrement = 10
--num2


console.log(sum, sub, mul, div, mod, increment, decrement, num1, num2)

const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// reader.question("What is you name? ", function(answer) {
//     console.log(`Hi, my name is ${answer}`)
// });

reader.question("Enter the number to find odd or even: ", function(number) {
    if (number % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
});

