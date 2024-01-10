// Hoisting - It refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution
// Variables can thus be referenced before they are declared in JS


// following two lines will run successfully duw to JS hoisting
console.log(a)
greet()
function greet(){
    console.log("Good Morning")
}

var a =10 ; // Declaration hoisted to the top but initialization is not 

// let a =10 ; // It can not be access it did  not initialized at top
console.log(a)