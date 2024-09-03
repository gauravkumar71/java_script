const user = {
     username: "hitesh",
     price: 999,
     welcomMessage: function(){
            console.log(`${this.username} , welcome to website`);
            console.log(this);
     }

} 

// user.welcomMessage()
// user.username = "sam"
// user.welcomMessage();

// console.log(this);

// This keyword doesnot work in the function
// Browser me global variable window hota hai

// function chai(){
//      let username = "hitesh"
//      console.log(this);
// }

// chai()

const chai = () => {
     let username = "hitesh"
     console.log(this);
}

// chai()

// Basic Arrow Function
// Explicit  function  me return likna padta hai

// const addTwo = (num1,num2) =>
// {
//      return num1+num2
// }

// Implicit Return
// curly bracesis me return nahi likha jata h

// const addTwo = (num1,num2) =>  (num1+num2)

// object wrap

const addTwo = (num1,num2) =>  ({username:"hitesh"})

     
     
console.log(addTwo(3, 4))