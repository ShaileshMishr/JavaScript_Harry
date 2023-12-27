// Q1- use logical operator to find whether the age of a person lies between 10 and 20

let a = prompt("Hey whats your age?");
// prompt will not work in vs code It will work on browser
if(a>10 && a<20){
    alert("Yes");
}
else{
    alert("No");
}


//Q2- Demonstrate the use of switch case statement

let age = prompt("Hey whats your age?");

switch (age){
        case '10':
            console.log("Your age is 10")
            break
        case '12':
            console.log("Your age is 12")
            break
        case '15':
            console.log("Your age is 15")
            break
        case '45':
            console.log("Your age is 45")
            break
        case '70':
            console.log("Your age is 70")
            break
        default:
            console.log("Your age is not special")
}


// Q3- number is divisble by 2 and 3

let num = prompt("Enter number ");
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("yes")
}
else{
    console.log("No")
}

// Q4 - number is divisible by either 2 or 3

let num1 = prompt("Enter number ");
num1 = Number.parseInt(num1)
if(num1%2==0 || num1%3==0){
    console.log("yes")
}
else{
    console.log("No")
}

// Q5- check age is 18 or not using ternary operator

let b = prompt("Hey whats your age?");

console.log("You Can", b<18? "Not Drive": "Drive")