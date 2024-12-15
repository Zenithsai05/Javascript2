// singleton

// object literals

const MySys = Symbol("key1")



const Jsuser = {
    name: "Zenith",
    "full name": "zenith pandiya",
    [MySys]: "mykey1",   // Use [] to show in symbol
    age: 18,
    email: "zenith@gmail.com",
    isloggedIn: "false",
    lastlogindays: ["monday", "tuesday"]
}

// console.log(Jsuser["email"]);
// console.log(Jsuser.name);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[MySys]);

Jsuser.email = "zenith@gpt.com"
// Object.freeze(Jsuser) // freeze the value 
Jsuser.email = "sairaj@gmail.com"

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js");
    
}
Jsuser.greetingtwo = function(){
    console.log(`Hello Js, ${this.name}`);   // " " changes two `` and this use for to pick the strings from Jsuser const
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());






