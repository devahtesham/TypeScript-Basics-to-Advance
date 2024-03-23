
interface Tech {
    techName: string,
    domain: string,
    rate?: number
}
const techObj: Tech = {
    techName: "JS",
    domain: "Web Dev",
}

// const updateTech = (tech: Tech, update: any) => {
//     return {
//         ...tech,
//         ...update
//     }
// }

// ==== 1. Partial (to transform current obj into new one without creating another, make all the type optional)
const updateTech = (tech: Tech, fieldToUpdate: Partial<Tech>): Tech => {
    return {
        ...tech,
        ...fieldToUpdate
    }
}
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

const langRatings: Record<string, number> = {
    "JS": 2,
    "PHP": 3,
    "Go": 4,
    "React": 5,
}

//Eg:2

//literal type
type Devs = "hassan" | "aslam" | "arifa" | "kanza"

interface TechStack {
    techname: string
    years: number
    isStatisfied?: boolean
}

const devData: Record<Devs, TechStack> = {
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
}
// console.log(langRatings);

// ====== 5. Pick  (tells which property to pic from) syntax:- Pick<from, whose>

const testObj1: Pick<TechStack, "techname" | "isStatisfied"> = {
    techname: 'TypeScript',
    isStatisfied: true,
}

// ===== 6. Omit
const testObj2: Omit<TechStack, "techname"> = {
    years: 5,
    isStatisfied: false
}


// ===== 7. Extract
// it is similar to Pick but it is work on union types instead of an interface

type Companies = "Gaditek" | "Folio3" | "Systems" | "Netsol"

// Extract
type BestCompanies = Extract<Companies, "Gaditek" | "Systems">

// ===== 8. Exclude

// Exclude
type HighRevenueCompanies = Exclude<Companies, "Gaditek">

// ====== 9. NonNullable

type BestEmployee = "Hassan" | "aslam" | "Qasim" | null | undefined

// NonNullable
type RefinedEmployee = NonNullable<BestEmployee>

// ===== 10. Return Type
// for eg i want to create a function that returns the below type (UserRecord)
type UserRecord = { title: string, age: number }

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

const getUserRecord = (title: string, age: number) => {
    return {
        title: title,
        age: age
    }

    // return [{
    //     title: title,
    //     age: age
    // }]

}

type UserRecordType = ReturnType<typeof getUserRecord>
const userRecord: UserRecordType = getUserRecord("Ahtesham", 23);
// console.log(userRecord);

// ===== 11. Parameters
// it is used as we use ReturnType above, used to get the parameters of a function
// i am using the same getUserRecord function

type GetUserRecordFnParams = Parameters<typeof getUserRecord>  // it give all parameter of func in tuple
const getUserRecordFnArguements: GetUserRecordFnParams = ["Joseph", 34];  // we pass arguements value in tuple

const newUsersRecord: UserRecordType = getUserRecord(...getUserRecordFnArguements);
console.log(newUsersRecord);


// ===== 12. Awaited ==== helps us with the ReturnType of a promise
// lets create a function to fetch users data using an API (https://jsonplaceholder.typicode.com/todos/)

interface Users {
    // object paste from an API response
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
}

const fetchUsers = async (): Promise<Users[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    return data
}
type UsersDataType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers()
    .then(data => {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })






