"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const techObj = {
    techName: "JS",
    domain: "Web Dev",
};
// const updateTech = (tech: Tech, update: any) => {
//     return {
//         ...tech,
//         ...update
//     }
// }
// ==== 1. Partial (to transform current obj into new one without creating another, make all the type optional)
const updateTech = (tech, fieldToUpdate) => {
    return Object.assign(Object.assign({}, tech), fieldToUpdate);
};
// console.log(updateTech(techObj, { domain: "AI",rate:30 }));
// ==== 2. Required (opposite of Partial)
// const techObj2:Required<Tech> = {
//     techName:"PHP",
//     domain: "Integratiion",
// }
// ==== 3. ReadOnly
// const techObj3:Readonly<Tech> = {
//     techName:"TypeScript",
//     domain:"Backend Dev"
// }
// techObj3.domain = "mob app"
// console.log(techObj3);
// ===== 4. Record
// Eg:1
const langRatings = {
    "JS": 2,
    "PHP": 3,
    "Go": 4,
    "React": 5,
};
const devData = {
    hassan: {
        techname: "JS",
        years: 4,
        isStatisfied: true
    },
    aslam: {
        techname: "react",
        years: 4
    },
    arifa: {
        techname: "php",
        years: 4
    },
    kanza: {
        techname: "go",
        years: 4
    }
};
// console.log(langRatings);
// ====== 5. Pick  (tells which property to pic from) syntax:- Pick<from, whose>
const testObj1 = {
    techname: 'TypeScript',
    isStatisfied: true,
};
// ===== 6. Omit
const testObj2 = {
    years: 5,
    isStatisfied: false
};
// const getUserRecord = (title: string, age: number): UserRecord => {
//     return {
//         title: title,
//         age: age
//     }
// }
/*
The above function is good, but if i change the code of return in function body so we have to change the UserRecord type as well, otherwise it will through an error
for eg below:-
*/
// const getUserRecord = (title: string, age: number): UserRecord => {
//     return [{
//         title: title,
//         age: age
//     }]
// }
// so to auto sink the function body return to the above return type we pass, we use utility type ReturnType
const getUserRecord = (title, age) => {
    return {
        title: title,
        age: age
    };
    // return [{
    //     title: title,
    //     age: age
    // }]
};
const userRecord = getUserRecord("Ahtesham", 23);
const getUserRecordFnArguements = ["Joseph", 34]; // we pass arguements value in tuple
const newUsersRecord = getUserRecord(...getUserRecordFnArguements);
console.log(newUsersRecord);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = yield response.json();
    return data;
});
fetchUsers()
    .then(data => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
