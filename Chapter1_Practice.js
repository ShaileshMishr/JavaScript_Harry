// Create a variable of type string and try to add a number to it

let a = "3"
let b = 7
let d = "Kishan"
let e = 3
console.log(a+ b)
console.log(d+e)

// find the type of a and e
console.log(typeof (a+b))
console.log(typeof e)

// create a const object in js can you change it to 
// hold a number later?

const student = {
    name: "Kishan",
    age: 24,
    course: "CSE"
}
// student=4  // It throws error Assignment to constant variable.

// add a new key in student object
student['fee']=50000
student['name']="Rohan"
console.log(student)

// WAP to create a word meaning dictionary of  words

const dict = {
    Abrogate:"To revoke",
    Dilatory:"Wasting time",
    Puissant:"Powerful",
    Feral:"wild",
    furtive:"secrete"   
}

console.log(dict.Feral)
console.log(dict['Puissant'])