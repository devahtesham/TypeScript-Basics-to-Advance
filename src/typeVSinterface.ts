// ----- type VS interface

// ---- use of type in objects 
type Student = {
    name: string,
    stdId: (string | number),
    fees: number,
    isPresent:(string | boolean)
}


// ----- but we can use type beyond objects as type alias
type StringOrNumber = (string | number)
type StringOrBoolean = (string | boolean)

// ----- but i can't use this with interface, the below line throws an error
// interface NumberOrBoolean = (number | boolean)


type StudentNew = {
    name: string,
    stdId: StringOrNumber,
    fees: number,
    isPresent: StringOrBoolean
}


const obj: Student = {
    name:"ali",
    stdId:"Eb123",
    fees:200,
    isPresent:false
}
const objNew: StudentNew = {
    name:"hassan",
    stdId:"Eb222",
    fees:300,
    isPresent:"true"
}

console.log(obj);
console.log(objNew);