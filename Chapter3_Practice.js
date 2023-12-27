//  Q1-  WAP to print the marks of a student obj using for loop

console.log("Using for loop...............")
let marks = {
    harry:98,
    kishan:100,
    rohan:70,
    shiv:45
}
for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]) 
}

// Q2 print above program using for in loop
console.log("Using for in loop...............")
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key]) 
}

// Q3 - WAP to print "try again" until the user enters the correct number.

let cn = 4
let i 
while (i!=cn) {
 i=prompt("Enter a number")   
 console.log("Try Again....")
}
console.log("You have entered a corrct number")


// Q4 - write a function to find mean of 4 numbers

const mean= (a,b,c,d)=>{
    return(a+b+c+d)/4
}

console.log(mean(1,2,3,4))
