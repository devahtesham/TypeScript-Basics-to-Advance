"use strict";
// simple function to log messages, it simply log, doesnt return any thing 
const logMsg = (message) => {
    console.log(message);
};
// if a function does'nt return any thing we set a return type void
const displayName = (name) => {
    logMsg(name);
};
// displayName("hello i am learning TypeScript !")
// simple function to add two numbers with return type number
const addNums = (a, b) => {
    return a + b;
};
// with simple function
function sumAll(a, b) {
    return a + b;
}
// with optional parameter
const subtract = (num1, num2, num3) => {
    if (typeof num3 === 'undefined')
        return (num2 - num1) + 0;
    return (num2 - num1) + num3;
};
// with default paramter
const subtractAnotherApproach = (num1, num2, num3 = 0) => {
    // if (typeof num3 === 'undefined') return (num2 - num1) + 0
    return (num2 - num1) + num3;
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
logMsg(multiply(2, 3));
