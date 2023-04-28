const upperCase = require("upper-case").upperCase

function greet(name) {
    console.log(upperCase(`Hello ${name}, Welcome to codevolution!`))
}

greet("Viswas")
module.exports = greet;