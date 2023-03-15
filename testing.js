// function for unit testing


// simple function to test for equality
// name - title of test

function test (aName, expected, actual)
    if (expected === actual) {
        console.log(aName + "\nTest passed. Expected" + expected + "is equal to Actual: " + actual + ".")
    } else {
        console.log(aName + "\nTest failed. Expected " + expected + " is not equal to Actual " + actual + "." )
    }


    function numbercic (num) {
        return num
    }

    test ("Test if the number input is the same as the output ", 2, blah (2))

// testing the add function

function test (aName, expected, actual)
    if (expected === actual) {
        console.log(aName + "\nTest passed. Expected" + expected + "is equal to Actual: " + actual + ".")
    } else {
        console.log(aName + "\nTest failed. Expected " + expected + " is not equal to Actual " + actual + "." )
    }

    function add (num1, num2) {
        return (num1 + num2)
    }

// Two positive numbers
test ("Two positive numbers", 3, add(1,2))

// One zero and a number greater than zero
test ("One zero and a number greater than zero", 1, add(0,1))

// Two 2 digit numbers
test ("Two 2 digit numbers", 25, add(10,15))

// A single digit and a dobule digit number
test ("A single digit and a dobule digit number", 17, add(2,15))

// A positive and a negative number
test ("A positive and a negative number", 3, add(-4, 7))

// A number string plus a number
test ("A positive and a negative number", 5, add("2", 3))

// A string plus a string
test ("A string plus a string", 25, add("2", "5"))

// A boolean plus a string
test ("A boolean plus a string", 25, add(true, "Hi"))

// Missing an argument
test ("Missing an argument", null, add(1))

// Missing both arguments
test ("Missing both arguments", null, add())
