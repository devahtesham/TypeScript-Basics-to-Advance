

const emp1: BankEmployee = {
    empId: "001",
    empName: "Ali",
    age: 23,
    salary: 2323233
}

// for exampole we want to loop over emp1
for (let key in emp1) {
    // console.log(`${key} is ${emp1[key]}`);
}

interface BankEmployee {
    [index: string]: string | number           // index signature
    empId: string | number
    empName: string
    age: number,
    salary: number
}


// =========== eg # 2
interface WebEng {
    [index: string]: string
}

const webEngObj: WebEng = {
    // we can declare any property we want, because typescript dont know about the property, they treat every property as dynamic so accept all, but the value should be string
    techStack: "NextJS",
    company: "Gaditek"
}
// console.log(webEngObj.techStack);       // present in an object
// console.log(webEngObj.company);         // present in an object
// console.log(webEngObj.testing);         // not present in an object, but typescript has no issue due to index signature which dont have any way to know which property exist or which not





// ============ keyof Assertion
// If we don’t want to use index signature due to the above issue we can use keyof assertion. 

interface Programmer {
    field: string
    expertise: string
    age: number
    experience: string | number
}
const programmmerObj: Programmer = {
    field: "JS",
    expertise: "Problem Solving",
    age: 28,
    experience: 7
}

for (const key in programmmerObj) {
    console.log(`Programmer has ${key}:- ${programmmerObj[key as keyof Programmer]}`);
}

// for a side note we cal also get keys using 
console.log(Object.keys(programmmerObj)
    .map(key => `Programming has ${key}:- ${programmmerObj[key as keyof Programmer]} `)
    .join("")
    )
    