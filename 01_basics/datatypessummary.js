// Primitive Datatypes

// 7 types : String , Number, Boolean, null, undefined, Symbol
//Bigint

const score = 100
const scoreValue = 100.3  

const isLoggedIn = false
const outsideTemp = null
let userEmail 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//const bigNumber =  3545447665446565465464n




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ("shaktiman", "nagraj", "doga");
 let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}


// console.log(typeof bigNumber);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===

// Stack (primitive), Heap (Non-Primitve)

let myYoutubeName = "gaurav kumar"

let onotherName = "myYoutubename"
anotherName = "kishan"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl", 
}

let userTwo = userOne

userTwo.email = "garavkumar32335@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

