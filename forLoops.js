
// For loop
// for (starting place; condition; incrementer) {}

// for (var i = 1; i < 10; i++){
//     console.log(i)
// }

// for (var i = 1; i < 5; i++) {
//     console.log("Hello " + i)
// }

// never ending loops
// infinite loop

//for (var i = 1; i < 10; i--){
//    console.log(i)
//}

// for loop with an if condition

// for (var i = 1; i < 5; i++) {
//     if (i==1) {
//         console.log("Hello")
//     } else if (i == 2) {
//         console.log("Bye")
//     } else if (i == 3) {
//         console.log("Yo")
//     } else if (i == 4) {
//         console.log("See ya")
//     }

// }

// breaking the for loop

// for (var i = 1; i < 10; i++) {
//     if (i == 5) {
//         break;
//     } else {
//         console.log(i)
//     }
// }

// For loop with an array

// var things = [1, 2, "hello", "bye"]

// for (var i = 0; i < 4; i++) {
//     console.log(things[i])
// }

// activity: this will be a bit tricky

// var answer = prompt("Type YES or NO")
// var answers = ["YES", "NO"]
// var responses = ["You said YES", "You said NO", "You didn't follow directions"]


// for (var i = 0; i < 3; i++) {
//     if (answer != answers[0] && answer != answer[1]){
//     console.log(responses[2])
//     break;
// } else if (answer == answers[i]) {
//     console.log(responses[i])
//     }
// }

// for loop in a for loop

// var numbers = [1, 2, 3, 4, 5]
// var letters = ["a", "b", "c"]

// for (var i = 0; i < 4; i++){
//     console.log(numbers[i])

//     for (var t = 0; t < 2; t++) {
//         console.log(letters)
//     }
// }

// activity: the square

// var square = ""

// for (var i = 0; i < 5; i++) {
//     for (var t = 0; t < 5; t++){
//     square = square + "*"
//     }
//     square = square + "\n"
// }

// console.log(square)


/*For this project I want you to create a Triangle using the * symbol. This is going to be very similar to the square activity that we did.

If you get stuck or confused, go back to the square activity for reference.*/

// var triangle = ""
// for(var i = 1; i < 6; i++) {
//     for(var j = 1; j < i + 1; j++) {
//         triangle += "*"
//     }
//     triangle += "\n"
// }
// console.log(triangle)