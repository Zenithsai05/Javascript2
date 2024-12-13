/*
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === 

console.log("2" === 2);
*/

// Stack(P), heap(Non P) memory

let myname = "zenith"

let anothername = myname

console.log(anothername);
 

let userone = {
    email: "user@gmail.com",
    upi:   "paypalupi@ybl"
}

let usertwo = userone

usertwo.email = "zenith@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

