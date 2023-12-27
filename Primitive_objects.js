// Null // Number // String // Symbol
// Unfefined // Boolean // BigInt

// nn bb ss u  - Premitive data types

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Kishan"
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)

// Objects in js - Non primitive data types
// Object makes key value pairs

const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish":67,
    "Rohan":undefined
}
console.log(item)
console.log(item["Shubh"])
console.log(item["Lovish"])