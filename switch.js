// Switch statement

var favoriteFood = "pasta"

if (favoriteFood == "pizza") {
    console.log("Pizza")
} else if (favoriteFood == "pasta") {
    console.log("Pasta!")
} else {
    console.log(favoriteFood)
}

//switch
var favoriteFood = "pizza"

switch (favoriteFood) {
    case "pizza" :
        console.log("Pizza")
        break
    case "pasta" :
        console.log("Pasta!")
        break
    default :
    console.log(favFood)
}

// Take the following if statement and turn it into a switch statement. Make sure to test each condition.

// var favColor = "red"

// if (favColor == "blue") {

//     console.log("Violets are blue")

// } else if (favColor == "red") {

//     console.log("Roses are red")

// } else {

//     console.log("Sugar is sweet")

// }


var favColor = "red";

switch(favColor) {

  case "blue":
    console.log("Violets are blue");
    break;

  case "red":
    console.log("Roses are red");
    break;

  default:
    console.log("Sugar is sweet");
    break;

}