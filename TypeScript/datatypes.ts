
// string

let Lname : string;

Lname = "Shailesh";

let newname = Lname.toUpperCase();
console.log(newname);

// number
let age :number;

age=24;

let dob = "25";
let result = parseInt(dob);
console.log(age);
console.log(result);

// boolean
let isValid : boolean = false;

console.log(isValid);

// array
let empList : string[];
empList = ["Santosh", "kishan", "Ram"]

let numList : Array<number>;
numList =  [1,2,3,4,5]

// swapping
// let newNum = numList[0];
// console.log(newNum);

// filter
let results = numList.filter((num) => num>2);

// find
let num = numList.find((num) => num===2);
let emp = empList.find((emp) => emp==="Ram");

// reduce
let sum = numList.reduce((acc, num) => acc+num);

console.log(results);
console.log(num)
console.log(emp)
console.log(sum)

// enum

const enum Color{
    Red,
    Green,
    Blue
}

let c : Color=Color.Blue;

// tuples

let swapNumbs : [firstNumber: number,secondNumber: number];

function swapNumbers(num1:number,num2:number) : [number,number]{
    return [num2, num1]
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];

// any - don't use any 

let department : any;

department="IT";
department: 10;

