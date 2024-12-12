const accountId = 144553
let accountEmail = "zenith@gmail.com"
var accountpassword = "12345"
accountcity = "noida"

let accountstate;

//accountId = 2 // na
accountEmail = "sai@as.com" 
accountpassword = "12312313" 
accountcity = "delhi"

/* NOTES
1. prefer not to use Var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountpassword, accountcity, accountstate])