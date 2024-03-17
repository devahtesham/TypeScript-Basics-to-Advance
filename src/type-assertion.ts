// assertion basic example
const salary: string = '20000'
// below we are telling typescript that we know that even though sentence may be string or null but we know better that here it would be string not null so we explicitily asserting string type here for sentence
let sentence: (string | undefined) = "My Salary is " as string
// console.log(sentence.concat(salary))


// unknown type
// ----- below statement  is wrong for typescript but if we want we need double assertion here 

// 10 as string   
10 as unknown as string

// take the unknown type with a practical example
const fees: number = 3000;
let statement: string = "The fees is "
const finalAns = statement.concat((fees as unknown) as string);
console.log(finalAns);



/*
    TASK:- Get span element from HTML through DOM and append current year from Date
*/
// --------- 1st possible solution
// const year = document.getElementById('year') as HTMLElement;
// const fullYear:number = new Date().getFullYear();
// year.textContent = (fullYear as unknown) as string


// 1st possible solution
const year = document.getElementById('year') as HTMLSpanElement;
const fullYear:string = new Date().getFullYear() + '';
year.textContent = fullYear