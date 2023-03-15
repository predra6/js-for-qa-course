// function basics
// defining a function

// const message = function() {
//     console.log("Hello there!")
// }

// message()

// // declaring a function

// function message() {
//     console.log("By now")
// }

// message()


// function newMessage() {
//     console.log(1)
//     console.log(2)
//     console.log(3)

// }

// newMessage()
// newMessage()
// newMessage()

// returning data

// function getMessage() {
//     return "Hello there"
// }

// //getMessage()

// console.log(getMessage())


// function getNumber() {
//     return 1
// }
// console.log(getNumber())

// Activity: Passing the buck

// function getCost(){
//     //Cost of Oranges
//     return 5
// }

// console.log("Five oranges cost about $" + getCost())

// function getNumber() {
//     return 5
// }
// console.log(getNumber() + 5)

// function getSomething() {
//     return getNumber + 5
// }

// console.log(getSomething())

// Parameters and arguments

// function messages (message1, message2) {

//     console.log(message1)
//     console.log(message2)
// }

// messages("Message1", "Message2")

// Activity: Area of rectangle

//function rectArea (length, width) {
//     var area = length * width
// }

// rectArea(2, 5)

// const

// const
//const thing // bad

// const something = "bmw" // good

// const arr = [1, 3, 3]

// variable scope

// var num = 1

// function thing() {
//     num = 2
//     var num2 = 2
//     console.log("function" + num)
// }

// thing ()
// console.log("Outside function " + num2)

// const
// var
// let 

// let num = 1

// function thing() {
//     num = 2
//     var num2 = 2
//     console.log("function" + num)
// }

// thing ()
// console.log("Outside function " + num2)

// let num = 1

// if (1 == 1) {
//     console.log("if statement " + num) 
// }

// console.log("Outside if statement:" + num)



/*
Using what you have learned from the Functions section, I want you to do the following.



Your assignment is to build a simple app that calculates the amount of change or money back due to the user after purchasing an item.



Here are the things that should be included:

Prompt asking for the amount the user is paying.  Also tell the user how much they owe.

A function that takes the amount the user paying

The function should subtract the amount payed from the original cost

The function should return the difference from the calculation

You then need a statement that will give 1 of 3 different responses. You can just use the console.log() statement.

You gave the exact amount.

You gave too much. Your change due is $x.xx.

You gave too little. You still owe $x.xx.
*/

var debt = 50
console.log("You owe: " +  debt)
var amount = prompt("Amount?")

function getDebt(amount) {
    return debt - amount
}

var leftDebt = getDebt(amount)
if (leftDebt == 0)
    console.log("You gave the exact ammount")
else if (leftDebt > 0)
    console.log("You gave too little. You still owe: $" + leftDebt)
else
    console.log("You gave too much. Your change due is $" + Math.abs(leftDebt))

    