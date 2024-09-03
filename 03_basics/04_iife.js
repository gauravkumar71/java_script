// Immdeately Invoked Function Expressions (IIFE)

(function chai() {
    // nameed iihe
    console.log(`DB CONNECTED`);
})();

// global scope ke pollution ko hatane ke liye iife use hota hai

// arrow function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh")