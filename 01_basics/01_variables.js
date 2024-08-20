const studentId = 12345
let studentEmail = "gauravkumar32335@gmail.com"
studentCity = "Raxaul"

console.log("studentEmail");
/*
  Prefer not to use var
  because of issue in block scope and functional scope
*/
studentEmail = "apnagaurav01@gmail.com"
studentCity = "Patna"
console.table({studentEmail,studentCity})