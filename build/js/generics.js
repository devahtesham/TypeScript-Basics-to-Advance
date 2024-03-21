"use strict";
// by using any type we dont have a way to preserve or save info about what type was passed and what return , see the example below, but by using generics we can solve this issue
// ====== Eg# 01
const identify = (arg) => {
    const num = 10;
    arg = num;
    return arg;
};
// console.log(identify("I am identiy Function"));
// lets create another function using generics
// const identifyNew = <T>(arg: T): T => {
//     const num = 20;
//     arg = num
//     return arg
// }
// console.log(identifyNew("I am Identify function using generics"));
// ====== Eg# 02
const isUserActive = (username) => {
    return {
        name: username,
        isActive: true
    };
};
const isActiveStatus = (username) => {
    return {
        name: username,
        isActive: true
    };
};
const isUserStatusActive = (user) => {
    return user;
};
// console.log(isUserStatusActive({ id: 1, username: "ali", age: 23 }));
// console.log(isUserStatusActive({ username: "ali", age: 23 }));       // throws error due to no id property
// Eg# 05 ===== use generic in class
class StateObj {
    constructor(value) {
        this.data = value;
    }
    // getter
    get state() {
        return this.data;
    }
    // setter
    set state(value) {
        this.data = value;
    }
}
const stateObj1 = new StateObj("Hassan"); // it make this string type only, so now after this we cant set any other type data
console.log(stateObj1.state);
stateObj1.state = "Ahmed";
console.log(stateObj1.state);
// stateObj1.state = 20
const stateObj2 = new StateObj(10); // now in that way we can set different data type value by passing specific type in place of <T>
console.log(stateObj2.state);
