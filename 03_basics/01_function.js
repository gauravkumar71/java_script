

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
    }

    // sayMyName()

   //  function addTwoNumbers(number1, number2){
   //     console.log( number1 + number2);
   //  }

    function addTwoNumbers(number1, number2){
      // let result = number1 + number2
      // return result
      // Second Method

      return number1 + number2

   }

     const result = addTwoNumbers(3,4)
   //   console.log("Result: ", result);



   function loginUserMessage(username){
      return '$ {username} just logged in'
   }
   // console.log(loginUserMessage("hitesh"))
  //  console.log(loginUserMessage("gaurav"))


  function calculateCartPrice( val1, val2,...num1){
       return num1
  }


  //  console.log(calculateCartPrice(200, 400, 500, 2000))

  const user = {
    username: "hitesh",
    price: 199
  }

  export function handleObject(anyobject){
       console.log('username is ${anyobject.username} and price is ${anyobject.price}');
  }

 const myNewArray = [200,400,100,600]
 function returnSecondValue(getArray){
     return getArray[1]
 }
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,100]));