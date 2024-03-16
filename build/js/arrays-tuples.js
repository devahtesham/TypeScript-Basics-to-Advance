"use strict";
// arrays
// n array we are not care about the exact length and order of data types in elements
const stdNames = [90, "ali", "hassan", "kasim", 9];
const mixed = ["ali", "hammad", "abbas", 34, undefined, true];
const ids = [10, 20, 30, 40];
// console.log(stdNames);
let newArr = stdNames;
newArr.push("hammad");
// console.log('[newArr]',newArr);
// if we are so much care about the length and the order of element's data type, we use tuples
// Tuples
const stdData = ["ali", true, 20];
// stdData[0] = true                // because it requires string at 0 place;
// stdData.push(undefined)
// console.log(stdData);
const bulkData = [true, "hammad", 30];
// bulkData.push(undefined)
console.log(bulkData);
