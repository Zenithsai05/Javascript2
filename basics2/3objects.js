// singleton

// const tinderuser = new Object()
const tinderuser ={}

tinderuser.id = "123abc",
tinderuser.name = "Sam",
tinderuser.isloggedIn = false

// console.log(tinderuser);

const regularuser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname: "singh"
        }
    }
}

// console.log(regularuser.fullname.userfullname);  // use dot and it get open


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "Z@gmail.com"
    },
    {
        id: 1,
        email: "Z@gmail.com"
    },
    {
        id: 1,
        email: "Z@gmail.com"
    },
]

users[1]. email
//  console.log(tinderuser);

//  console.log(Object.keys(tinderuser));  
//  console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser)); // less use

// asking if it have this value

// console.log(tinderuser.hasOwnProperty('isloggedIn')); // give output in boolean only 



const course = {
    coursename: "Javascript",
    price: "999",
    courseteacher: "Zenith",
}

const {courseteacher: teacher} = course  // This is de-Structure (: teacher)
console.log(teacher);

/*
// API Comes in this

{
    "name": "sai",
    "coursename": "js",
    "price": "free"
}

*/
