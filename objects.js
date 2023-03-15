// object basic

// let person = {
//     firstName : "Jason",
//     favColor : "Blue",
//     isMarried : false,
//     children: ["child1", "child2"],
//     thing: {
//         name: "object",
//         color: "yellow"
//     }
// }

// Activity: Family tree

// var family = {
//     father : {
//         firstName : "Ivan",
//         lastName : "Ivan",
//         isAlive : false
//     },
//     mother : {
//         firstName : "Martha",
//         lastName : "Wayne",
//         isAlive : false
//     },
//     children : [
//         {
//             firstName : "Bruce",
//             lastName : "Wayne",
//             isAlive : true
//         }
//     ],
//     butler : {
//         fistName : "Alfred",
//         lastName : "Penny",
//         isAlive : true
//     },

//     isRich : true
// }


// Methods

// var library = {
//     book : "JS is fun",
//     checkout : function(){
//         console.log("You have checked out " + this.book)
//     },
//     checkIn : function (number) {
//         console.log("You have checked in " + number + " books.")
//     }
// }


// Assigning new value

// var person = {
//     firstName : "Jason",
//     favNumber: 8,
//     isMarried : true,
//     children : [
//         "child1",
//         "child2"
//     ]
// }

// person.firstName = Bob
// person.children[0] = "Kid1"

/*
Using what you have learned from the Functions section, I want you to do the following.



Your assignment is to build a simple object that contains multiple properties and functions.



Here are the things that should be included:

1. An object named "restaurantMenu"

2. Properties that contains

    a. The name of the restaurant

    b. The items that the restaurant sells which includes the names and prices. Price can just be a number. Limit this to 5 items.

    c. A method that lists out all the menu items with their prices via an alert.

    d. A method that allows the user to select which menu item that the user wants to order via a prompt. Simply alert the menu item back to the user.

    */

    // var restaurantMenu = {
    //     // Properties

    //     name: "Restaurant",
    //     menuItems: [
    //         {
    //             food: "Pizza",
    //             prize: "15"
    //         },
    //         {
    //             food: "Burger",
    //             prize: "10"
    //         },
    //         {
    //             food: "Pasta",
    //             prize: "40"
    //         },
    //         {
    //             food: "Sandwich",
    //             prize: "5"
    //         },
    //         {
    //             food: "Salad",
    //             prize: "25"
    //         }
    //     ],
    
    //     // Methods
    //     listPrizes: function() {
    //         let menuList = this.name + " - menu\n"
    //         for(let i = 0; i < 5; i++) {
    //             menuList += i + " - " + this.menuItems[i].food + " - " + this.menuItems[i].prize + "€\n"
    //         }
    
    //         alert(menuList)
    //         this.selectFood(prompt("Please, select menu option"))
    //     },
    
    //     selectFood: function(menuOption) {
    //         alert(this.menuItems[menuOption].food + " - " + this.menuItems[menuOption].prize + "€\n")
    //     }
    // }

    //



    //Getter get the value as a property
    // Setter allows update


    // var person = {
    //     firstName : "Jason",
    //     lastName : "Myers",
    //     get myName() {
    //         return this.firstName + " " + this.lastName
    //     },
    //     set myName(value) {
    //         var name = value.split(" ")
    //         this.firstName = name[0]
    //         this.lastName = name[1]
    //     }
    // }


    // constructors
//blueprint of an object
    // var me = {
    //     firstName : "Jason",
    //     lastName : "Mayer",
    //     myName(){
    //         console.log(this.firstName + " " + this.lastName)
    //     }
    // }


    // var friend = {
    //     firstName : "Bob",
    //     lastName : "Bobovic",
    //     myName(){
    //         console.log(this.firstName + " " + this.lastName)
    //     }
    // }

// BobJones << Pascal
// bobJones << camel case

// function Person (first, last) {
//     this.firstName = first
//     this.lastName = last
//     this.myName = function(){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// new - creates an object
// var me = new Person("Jason", "Myers")

// me.myName()

// prototype

// function Person (first, last) {
//     this.firstName = first
//     this.lastName = last
//     this.myName = function(){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

//Person.prototype.favColor = "blue"
