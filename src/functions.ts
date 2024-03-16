
// simple function to log messages, it simply log, doesnt return any thing 
const logMsg = (message: any) => {
    console.log(message);
}

// if a function does'nt return any thing we set a return type void
const displayName = (name: string): void => {
    logMsg(name)
}
// displayName("hello i am learning TypeScript !")


// simple function to add two numbers with return type number
const addNums = (a: number, b: number): number => {
    return a + b
}


// with simple function
function sumAll(a: number, b: number): number {
    return a + b
}

// with optional parameter
const subtract = (num1: number, num2: number, num3?: number): number => {
    if (typeof num3 === 'undefined') return (num2 - num1) + 0
    return (num2 - num1) + num3
}

// with default paramter
const subtractAnotherApproach = (num1: number, num2: number, num3 = 0): number => {
    // if (typeof num3 === 'undefined') return (num2 - num1) + 0
    return (num2 - num1) + num3
}
// console.log(subtractAnotherApproach(5, 10));

// we cans create our custom function types based on their parameters and return types
// just like below we create a function type that accepts two number and the return type would also be number
type MathFunction = (a: number, b: number) => number

const multiply: MathFunction = (num1: number, num2: number) => {
    return num1 * num2
}
logMsg(multiply(2, 3))
