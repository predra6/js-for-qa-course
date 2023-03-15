// while loop

var i = 0;

while (i < 5) {
    console.log(i)
    i++
}

// do while loop 

var i = 0
do{
    console.log(i)
    i++
} while (i < 5)


// for vs while vs do while

for (var i = 0; i < 5; i++) {
    console.log(i)
}

var areYouHappy = true
while (areYouHappy){
    var answer = prompt("Are you happy?")    
    if (answer == "yes") {
    console.log("You are happy")
    } else {
        areYouHappy = false
        console.log("You are not happy")
    }
}

// do while
var i = 0
do {
    console.log()
    i++
} while (i < 5)
