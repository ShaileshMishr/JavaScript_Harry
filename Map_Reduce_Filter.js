// MAP- It creates a new array by performing some operations on each array element.
// For Each- Calls a function once for each array element.
// Filter- Filters an array with values that passes a test creates a new array
// Reduce - Reduces an array in a single value.
// It does not change original array

// Array Map Method
let arr = [11 , 22 , 33]
 let a = arr.map((value)=>{
    console.log(value)
    return value+1;
 })
console.log(a)

let arr1 = [11 , 22 , 33]
 let a1 = arr1.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index;
 })
console.log(a1)

// Array Filter method

let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

// Array Reduce method

let arr3= [1,2,3,4,5]
let a3= arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)