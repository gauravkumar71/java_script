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

function chai(){
     console.log(this);
}