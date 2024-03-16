"use strict";
// literal type:- mean only one value at a time in variable just like in const, but we can liverage with this using its union type feature
let password;
// password = "1234"         // this will throw an error because we can only pass "hello123" for password
// console.log('password',password);
// ---- we can liverage of union types in literal types
let userName;
// ------ it ensure that you can initialize only that above defined values in username 
userName = "supervisor";
console.log(userName);
