// values of an array

// var first = "bob"
// var second = "joe"
// var third = "sam"

// var people = ["bob", "joe", "sam", true, 1]

// console.log(people)



// Pop and Push

// var container = ["red", "blue", "yellow", "brown"]
// console.log(container)

//pop
// var element = container.pop()
// console.log(element)

// console.log(container)

//push
// container.push("orange")
// console.log(container)


// Shift and unshift

//var container = ["red", "blue", "yellow", "brown"]
//console.log(container)

//shift
//container.shift()
//console.log(container)

//unshift
//container.unshift("purple")
//console.log(container)

/*

I want you to create a series of prompts just like we did in the Activity "All the things".

I want you to store the value of each answer into the array for six questions. The questions should ask about favorite book. You may use the book list we created before if you can't think of anything.

Answers 1 - 5 will need to go into the end of the array.
Answer 6 will need to go into the beginning of the array.

Then I want you to remove the last item in the array.

Finally "console.log" your array.
*/

var answer
var listWithAnswers = []

answer = prompt("What is your favourite book?")
listWithAnswers.push(answer)

answer = prompt("What can you tell me about it?")
listWithAnswers.push(answer)

answer = prompt("Do you still own it?")
listWithAnswers.push(answer)

answer = prompt("Have you tried reading it on Kindle?")
listWithAnswers.push(answer)

answer = prompt("Have you recommended it to anyone else?")
listWithAnswers.push(answer)

// Sixth answer goes to the first place
answer = prompt("Is there any translation to other languages of that book?")
listWithAnswers.unshift(answer)

// Removing last element
listWithAnswers.pop()

console.log(listWithAnswers)
