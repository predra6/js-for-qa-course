// taking a slice

var str = "Happy, Excited, Calm"

var slice = str.slice(7, 14)
console.log(slice)

slice = str.slice(7)
console.log(slice)

slice = str.slice(-13, -6)
console.log(slice)


var str = "Happy, Excited, Calm"
var sb = str.substring(7)
console.log(sb)


// replacing content

var str = "I have turkey for lunch and turkey for dinner"
var lunch = str.replace("turkey", "pasta")
console.log(lunch)

lunch = str.replace("TURKEY", "pasta")

// convert to upper, lower, triming

var word = "happy"
var upperWord = word.toUpperCase()
console.log(upperWord)

var word = "HAPPY"
var lowerWord = word.toLowerCase()
console.log(lowerWord)

var sentence = "       Hello World        "
var clean = sentence.trim()
console.log(clean) 

// converting a string to an array

var str = "1, 2, 3, 4, 5"
var arr = str.split(",")

var str = "12345"
var arr = str.split("")

var str = "I have a puppy"
var arr = str.split(" ")



// convert string to number

var num = "5"

var newNum = Number(num)

newNum = Number("5.5")

