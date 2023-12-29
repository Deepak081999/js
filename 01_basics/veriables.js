const accountId = 144553
let accountEmail = "Deepak@google.com"
var accountPassword = "12345"
accountCity = "jhunjhunu"
let accountState;

// accountId = 2 // not allowed


accountEmail = "deep@.com"
accountPassword = "21123123"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity])