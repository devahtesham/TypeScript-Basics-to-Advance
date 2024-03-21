// by using any type we dont have a way to preserve or save info about what type was passed and what return , see the example below, but by using generics we can solve this issue
// ====== Eg# 01
const identify = (arg: any): any => {
    const num = 10;
    arg = num
    return arg
}
// console.log(identify("I am identiy Function"));

// lets create another function using generics
// const identifyNew = <T>(arg: T): T => {
//     const num = 20;
//     arg = num
//     return arg
// }

// console.log(identifyNew("I am Identify function using generics"));


// ====== Eg# 02
const isUserActive = <T>(username: T): { name: T, isActive: boolean } => {
    return {
        name: username,
        isActive: true

    }
}

// 


// // ====== Eg# 03    generic interface as a return type
interface ActiveStatus<T> {
    name: T
    isActive: boolean

}

const isActiveStatus = <T>(username: T): ActiveStatus<T> => {
    return {
        name: username,
        isActive: true

    }
}
// console.log(isUserActive("ahtesham"));


// Eg# 04 ===== use simple interface as a generic as below
interface HasId {
    id: number
}
const isUserStatusActive = <T extends HasId>(user: T): T => {
    return user
}

// console.log(isUserStatusActive({ id: 1, username: "ali", age: 23 }));
// console.log(isUserStatusActive({ username: "ali", age: 23 }));       // throws error due to no id property


// Eg# 05 ===== use generic in class
class StateObj<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    // getter
    get state(): T {
        return this.data
    }

    // setter
    set state(value: T) {
        this.data = value
    }
}

const stateObj1 = new StateObj("Hassan");       // it make this string type only, so now after this we cant set any other type data

console.log(stateObj1.state);
stateObj1.state = "Ahmed"
console.log(stateObj1.state);
// stateObj1.state = 20

const stateObj2 = new StateObj<number>(10);       // now in that way we can set different data type value by passing specific type in place of <T>

console.log(stateObj2.state);
