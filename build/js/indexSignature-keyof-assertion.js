"use strict";
const emp1 = {
    empId: "001",
    empName: "Ali",
    age: 23,
    salary: 2323233
};
// for exampole we want to loop over emp1
for (let key in emp1) {
    // console.log(`${key} is ${emp1[key]}`);
}
const webEngObj = {
    // we can declare any property we want, because typescript dont know about the property, they treat every property as dynamic so accept all, but the value should be string
    techStack: "NextJS",
    company: "Gaditek"
};
const programmmerObj = {
    field: "JS",
    expertise: "Problem Solving",
    age: 28,
    experience: 7
};
for (const key in programmmerObj) {
    console.log(`Programmer has ${key}:- ${programmmerObj[key]}`);
}
// for a side note we cal also get keys using 
console.log(Object.keys(programmmerObj)
    .map(key => `Programming has ${key}:- ${programmmerObj[key]} `)
    .join(""));
