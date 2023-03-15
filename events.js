function btnPressed() {
    console.log("Button 1 was pressed")
    document.getElementById("p1").innerHTML = "Button is pressed"
}

function textTyped() {
    console.log("Text was typed")

    if(document.getElementById("i1").value == "123") {
        document.getElementById("p2").innerHTML = "Invalid Password"
    } else {
    document.getElementById("p2").innerHTML = "Invalid Password"
        
}
}

document.getElementById("b2").addEventListener("click". btn2Pressed)

function btn2Pressed() {
    console.log("Button 2 was pressed")
    document.getElementById("p3").innerHTML = "Button 2 is pressed"
}

DocumentTimeline.getElementById("i2").addEventListener("change", text2Typed)

function text2Typed() {
    console.log("Text was typed")

    if(document.getElementById("i2").value == "123") {
        document.getElementById("p4").innerHTML = "Invalid Password"
    } else {
    document.getElementById("p4").innerHTML = "Invalid Password"
        
}
}

document.getElementById("p4").addEventListener("mouseover", moused)
function moused(){
    //document.getElementById("p4").innerHTML = "You have ben moused!"
    this.innerHTML = "You have been moused"
}



