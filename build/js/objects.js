"use strict";
// let obj1:object;
// obj1 = []        // we can re-initialize object as an array because array type is also an object
let obj1 = {
    name: "Ahtesham",
    age: 23,
    KPIs: ["KSA Store", 3, "Headless"],
    // salary:20                // this will throws an error because it does'nt exist in Employee type 
};
const obj2 = {
    name: 'Ahsan',
    age: 22,
    KPIs: ["Designing", "learning"],
    nickName: 'jack'
};
// obj1 = obj2
// console.log(obj1);
// lets say we have a function that display emp details
const displayDetail = (emp) => {
    // ---- below is throwing an error because we set the nickName property optional, and we can call toUpperCase() on undefine
    var _a;
    // return `Hello ${emp.name}, or we can say ${emp.nickName.toUpperCase()}`
    // thats why we use question mark (?) beside property here as well here as well
    return `Hello ${emp.name}, or we can say ${(_a = emp.nickName) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(displayDetail(obj1));
