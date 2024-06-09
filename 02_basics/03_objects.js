// Singleton

// object literals

const mySym = Symbol("key1")// Symbols

const JsUser = {
    name: "Hitesh",
    [mySym]: "mykey1", // Sysmbols ko object me define kare ka tarika
    age: 18,
    loctation: "Raxaul",
    email: "gauravkumar32335@gmail.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email) // object ko print karne ka pahla method
// console.log(JsUser["email"])// object ko print karne ka dusra method
// console.log(JsUser[mySym]) // Symbol ko print karne ka tarika

// Change the value of email
JsUser.email = "apnagaurav01@gmail.com"

// we use freeze property to freze our object after freze we cant perform any changes in object

// Object.freeze(JsUser)
JsUser.email = "apnakishan01@gmail.com"
// console.log(JsUser);

// function

JsUser.greeting = function(){
    console.log("hello js user");
}

console.log(JsUser.greeting());

// objects ke values ko reference karne ka tarika

JsUser.greetingTwo = function(){
    console.log('hello js user, ${this.name}');
}
console.log(JsUser.greetingTwo());