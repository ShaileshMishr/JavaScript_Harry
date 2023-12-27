let a = 67 // a contains 67
console.log(a)
a="harry"
console.log(a)
// let 8haary=7 // not allowed this will throw an error
// javascript is a case sensitive

// let vs var vs const

// var is globally scoped while let and const are block scoped.
// var can be updated and re-declared within its scope.
// let can be updated but not be re-declared.
// const can neither be updated nor ew declared

let b="kishan"
// let b=3  // throw error
b=3 // without let it will correct

const author = "Kishan"
// let author =5; // throws error because constant cannot be changed

let c=null
let d= undefined
{
    let b='this'
    console.log(b)
}
console.log(b)