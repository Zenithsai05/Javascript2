// dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mynewdate = new Date(2024, 0, 19, 6, 3)
console.log(mynewdate.toLocaleString());

//time

let mytimestamp = Date.now()
console.log(mytimestamp);
