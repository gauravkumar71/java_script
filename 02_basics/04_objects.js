// const tinderUser = new Objects() Singleton object
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "gauravkumar32335@gmail.com",
    fullname: {
           userfullname:{
            firstname: "gaurav",
            lastname: "kumar"
           }
    }
}

//    console.log(regularUser.fullname.userfullname.firstname);

   const obj1 = {1: "a", 2: "b"}
   const obj2 = {3: "a", 4: "b"}

//    const obj3 = Object.assign({}, obj1, obj2) // This is user for add two objects
  
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "gauravkumar"
    },
    {
        id: 1,
        email: "gauravkumar"
    },
    {
        id: 1,
        email: "gauravkumar"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));// This is use for find keys 
console.log(Object.values(tinderUser)); // This is user for find values
console.log(Objects.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this is user for check keys persent or not in objects



