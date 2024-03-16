// let obj1:object;
// obj1 = []        // we can re-initialize object as an array because array type is also an object

// we can use "type" or "interface keyword to create object types annotation"

// type Employee = {
//     name:string,
//     age:number,
//     KPIs:(string | number)[]
// }
interface Employee {
    name:string,
    age:number,
    KPIs:(string | number)[]
    nickName?:string            // this is set to optional 
}
let obj1:Employee = {
    name:"Ahtesham",
    age:23,
    KPIs:["KSA Store",3,"Headless"],
    // salary:20                // this will throws an error because it does'nt exist in Employee type 
}

const obj2:Employee = {
    name:'Ahsan',
    age:22,
    KPIs:["Designing","learning"],
    nickName:'jack'
}

// obj1 = obj2
// console.log(obj1);

// lets say we have a function that display emp details
const displayDetail = (emp:Employee)=>{
    // ---- below is throwing an error because we set the nickName property optional, and we can call toUpperCase() on undefine

    // return `Hello ${emp.name}, or we can say ${emp.nickName.toUpperCase()}`

    // thats why we use question mark (?) beside property here as well here as well
    return `Hello ${emp.name}, or we can say ${emp.nickName?.toUpperCase()}`
}
console.log(displayDetail(obj1));




