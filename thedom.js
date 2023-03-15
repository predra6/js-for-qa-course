
var thing = "Hello World"

document.getElementById("sample").innerHTML = thing



// minify js
var thing="Hello World";document.getElementById("sample").innerHTML=thing;



//1. Change the text of "Heading 1" to "Welcome to my site!".
document.getElementById("h1").innerHTML = "Welcome to my site!"

// 2. Change the text of "Paragraph 1" to "My name is " and add your name.
document.getElementById("p1").innerHTML = "My name is Juan"

//3. Remove the second H1 element 
var secondH1node = document.getElementsByTagName("h1")
document.body.removeChild(secondH1node[1])

//4. Change the font color of "Paragraph 2" to blue
document.getElementById("p2").style.color = "blue"

//5. Change the text of "Paragraph 2" to "I love JavaScript"
document.getElementById("p2").innerHTML = "I love JavaScript"