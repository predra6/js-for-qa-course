// Finding Elements

var headingText = document.getElementById("heading")
console.log(headingText)

var paragraphText = document.getElementsByClassName("content")[1]
console.log(paragraphText)

var heading2Text = document.getElementsByTagName("h2")[0]
console.log(heading2Text)



console.log(document.body)
console.log(document.URL)
console.log(document.title)
console.log(document.head)

// Relationships

var h1text = document.getElementById("heading").firstChild
console.log(h1text)

var h1Sibling = document.getElementById("heading").nextSibling
console.log(h1Sibling)

var h1Par = document.getElementById("heading").parentNode
console.log(h1Par)



document.getElementById("heading").style.color = "blue"
document.getElementById("heading").style.border = "1px black solid"


