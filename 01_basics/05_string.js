const name = "gaurav";
const repocount = 10

//console.log(name+repoCount+"value");

console.log('Hello my name is ${name} and my repo count is ${repocount} ');

const gameName = new String('gaurav-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt[2]);
console.log(gameName.indexOf('u'));

 const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString)

const newStringOne = "   gaurav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


