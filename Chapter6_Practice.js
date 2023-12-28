// Q1 - WAP using prompt function to take input of age as a value from user
// and use alert to tell him if he can drive.

// let age = prompt("Enter your age ")
// age = Number.parseInt(age)
// if(age>18){
//     alert("Yes you can drive")
// }
// else{
//     alert("You can not drive")
// }

// Q2- In q1 use confirm to ask the user if he wants to
// see the prompt again
// Q3- Use console error to log the error if the age entered is negative


let runAgain = true;

const canDrive = (age) =>{
    return age >= 18 ? true : false
}
while (runAgain) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age<0){
        console.error("Please enter a valid age")
        break;
    }

    if(canDrive(age)){
        alert("Yes you can drive")
    }
    else{
        alert("You cannot drive")
    }
    runAgain = confirm("Do you want to play again?")
}

//Q4- If number is geater than 4 then locate to google.com

let num = prompt("Enter your number")
num = Number.parseInt(num)

if(num>4){
    location.href = "https://google.com"
}

let color = prompt("Enter the bg color")
document.body.style.background = color