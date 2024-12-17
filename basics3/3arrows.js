const user = {
    username: "zenith",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome To Website`);
        console.log(this);
        
    }
}

//user.welcomeMessage()
//user.username = "sai"
//user.welcomeMessage()

// console.log(this); // it will show empty because ther is no value 

// Arrow function
const chai = () => {  // => this is arrow function
    let username = "sai"
    console.log(this);
    
}
// chai ()

// const addnum = (num1, num2) => {
//    return num1 + num2
 // }
// console.log(addnum(3, 8));

// Inplecit Return 

 const addnum = (num1, num2) => ( num1 + num2 )
 console.log(addnum(3, 8))

// FOR OBJECT

// const addnum = (num1, num2) => ({username: "Zenith"})
 