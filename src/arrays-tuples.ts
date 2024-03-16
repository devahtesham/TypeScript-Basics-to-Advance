// arrays
// n array we are not care about the exact length and order of data types in elements
const stdNames:(string | number )[] = [90,"ali","hassan","kasim",9];
const mixed:any[] = ["ali","hammad","abbas",34,undefined,true];
const ids:number[] = [10,20,30,40]
// console.log(stdNames);

let newArr:(string | number | boolean)[] = stdNames;
newArr.push("hammad")
// console.log('[newArr]',newArr);

// if we are so much care about the length and the order of element's data type, we use tuples
// Tuples
const stdData:[string,boolean,number] = ["ali",true,20];
// stdData[0] = true                // because it requires string at 0 place;
// stdData.push(undefined)
// console.log(stdData);

const bulkData:(string | number | boolean)[] = [true,"hammad",30];
// bulkData.push(undefined)
console.log(bulkData);

