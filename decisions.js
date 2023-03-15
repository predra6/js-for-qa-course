// I am trying to find the perfect gift for my wife. I don't know what to get her so I want you to make up some code that allows me to enter a gift idea and you will respond with how well you feel that gift will go. Use a PROMPT to get the input.

// Here is the list of gift ideas that you need to include responses for:

// - roses
// - jewelry
// - card
// - money
// - candy
// - electronics
// - books
// - puppy

// I will allow you to use your creativity to choose whatever the response you want for each item. But I want the response to be a CONCATENATION of the gift and some text.

// Finally, make sure you have a message that appears if the gift doesn't match one of the choices. Once again using CONCATENATION.

// var gift = prompt ("What gift should I buy to my wife?")

// if (gift == "roses") {
//     console.log(gift + " sounds perfect!")
// }  else if (gift == "jewelry") {
//     console.log("Choosing " + gift + " is awesome!") 
// }  else if (gift == "card") {
//     console.log("A " + gift + " would fit!")
// } else if (gift == "money") {
//     console.log("Heh, " + gift + " is always right :)")
// } else if (gift == "candy") {
//     console.log("Delicious " + gift + " for her, mmmm!")
// } else if (gift == "electronics") {
//     console.log("As a tech savy, " + gift + " is the way to go!")
// } else if (gift == "books") {
//     console.log("She is a reader! Buying " + books + " sounds great!")
// } else if (gift == "puppy") {
//     console.log("She likes " + gift + " and animals, but prefer not to have it in her small apartment")
// } else {
//     console.log("Don't know how " + gift + " would fit. I have to think about it.")
// }



// if (1 == 2 || 2 == 3) {
//     console.log("This is strange")
// } else {
//     console.log("It should fail")
// }

// //Nesting

// if (1 == 1) {
//     if (2 == 2) {
//         console.log("Something")
//     }
// }

// activity: if this or that


// Version 1
// var answer1 = prompt("What is your favorite color?")
// var answer2 = prompt("Pick a number between 1-5")

// if (answer1 == "blue" && answer2 == "1") {
//     console.log("Those were my choices too")
// } else {
//     console.log("You choose " + answer1 + " and " + answer2)
// }

// var answer1 = prompt("What is your favorite color?")
// var answer2 = prompt("Pick a number between 1-5")

// if (answer1 == "blue" || answer2 == "1") {
//     console.log("At least one of those match")
// } else {
//     console.log("You choose " + answer1 + " and " + answer2)
// }

// Version 2

// var answer1 = prompt("What is your favorite color?")
// var answer2 = prompt("Pick a number between 1-5")

// if (answer1 == "blue") {
//     if (answer2 == "1"){
//     console.log("Those were my choices too")
//     } else {
//         console.log("You didn't choose 1")
//     }
// } else {
//     console.log("You didn't choose blue")
// }
