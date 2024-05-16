// ********************* NUMBERS ******* */

const score = 450
//console.log(score);

const balance = new Number(100)
//console.log(balance);

// Methods
//console.log(balance.toString().length); // This is used to conaver a num into strings
//console.log(balance.toFexed(1)); // This is used to fix the num after the decimal


const otherNumber = 23.8986;
//console.log(otherNumber.toPrecision(3))// This is give pricise value and always return strings

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-In')); // This change formats of repees counting

// ****************** MATHS *********** */

//console.log(Math);
//console.log(Math.abs(-4));// This change minus value to positive value
//console.log(Math.round(4.3)); // This is used to just round of the value
//console.log(Math.ceil(4.2)); // This function just choose the upper value of the number
//console.log(Math.floor(4.9)); // This function just used to select to lower value of the number
//console.log(Math.min(4,3,5,8));// Thsi is used for find minimum number
//console.log(Math.max(4,6,7,9,4,5,)); // This is used to find max num

console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10
const max = 20

 console.log( Math.floor(Math.random() * (max - min + 1) ) + min)