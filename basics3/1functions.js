// functions


function sayMyname(){
    console.log("s");
console.log("a");
console.log("i");

}
// sayMyname()

 //function addtwonumber(number1, number2) {
 //console.log( number1 + number2);  
 //}
// addtwonumber() give NaN because function is not given

//function addtwonumber(number1, number2) {
  //  console.log( number1 + number2);  
   // }

 //const result = addtwonumber(3, 5)

 // console.log("Result:", result) // it will show undefinde but output will be 8

 
function addtwonumber(number1, number2) {
    let result = number1 + number2
    return result  
    }

 const result = addtwonumber(3, 5)

 // console.log("Result:", result) 

 function loginuser(username){
    return `${username} just logged in`
 }

 // loginuser("sai") // it will not work becuase of return and did not give print value
// console.log(loginuser("sai")); // if value is not given then its undefined.

// if statement

function loginuser(username){
    if(username === undefined) { // same write in ! like if (!username) give the same output
         console.log("please enter a username");
         return // adding this will not give anything
    }
    return `${username} just logged in`
 }
 // console.log(loginuser());



 function calculatecartprise(...num1){  // ... rest opreator
     return num1
 }
 // console.log(calculatecartprise(200, 400, 500, 2000));

 
 function calculatecartprise(val1, val2, ...num1){  // ... rest opreator
    return num1
}
// console.log(calculatecartprise(200, 400, 500, 2000)); // only give 500 and 2000 

const user ={
    username:  "sai",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

//direct pass

handleObject({
    username: "sam",
    price: 899
})

// array pass


const mynewarray = [200, 300, 400 , 600]

function returnsecondValue(getarray){
    return getarray[1]
}
// console.log(returnsecondValue(mynewarray));
console.log(returnsecondValue([200, 400, 500, 1000]));
