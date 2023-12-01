// let: is block-scoped, meaning that it can only be accessed within the block in which it is declared.
let accountEmail = "praful@gmail.com";

// var: is function-scoped, meaning that it can be accessed anywhere within the function in which it is declared.
var accountPassword = "pass@123";

// const: is block-scoped and cannot be reassigned.
const accountId = 23131;


console.log(accountId);
console.table([accountId, accountEmail, accountPassword]);