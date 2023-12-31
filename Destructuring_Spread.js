// Destructuring- Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variables.

let arr = [3,5,11,3,4,5,33,45]

// No need to do this:
// let a= arr[0]
// let b = arr[1]

// let [a,b,c,d,...r est] = arr
// console.log(a,b,c,d, rest)

// let [a, , b,...rest] = arr
// console.log(a,b, rest)

let {a,b} = {a:1, b:5}
console.log(a,b)


// Spread Operator
let arr1 = [3,5,8]
let obj1= {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1))

let obj2 = {
    name: "Harry",
    company: "Company XYZ",
    address: "Lucknow"
}
console.log({...obj2, name: "Kishan"})