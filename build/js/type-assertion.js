"use strict";
// assertion basic example
const salary = '20000';
// below we are telling typescript that we know that even though sentence may be string or null but we know better that here it would be string not null so we explicitily asserting string type here for sentence
let sentence = "My Salary is ";
// console.log(sentence.concat(salary))
// unknown type
// ----- below statement  is wrong for typescript but if we want we need double assertion here 
// 10 as string   
10;
// take the unknown type with a practical example
const fees = 3000;
let statement = "The fees is ";
const finalAns = statement.concat(fees);
console.log(finalAns);
/*
    TASK:- Get span element from HTML through DOM and append current year from Date
*/
// --------- 1st possible solution
// const year = document.getElementById('year') as HTMLElement;
// const fullYear:number = new Date().getFullYear();
// year.textContent = (fullYear as unknown) as string
// 1st possible solution
const year = document.getElementById('year');
const fullYear = new Date().getFullYear() + '';
year.textContent = fullYear;
