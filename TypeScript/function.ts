
// addition
function add(num1: number, num2: number) : number{
    return num1+num2;
}

console.log(add(12,20));

// substraction

const sub = (num1: number, num2: number) : number => num1-num2;
console.log(sub(2,3));

// multiplication
const mul = (num1: number, num2: number) : number {
    return num1*num2
}
console.log(mul(12,20));

// addition 3rd is optional parameter
function add1(num1: number, num2: number, num3?: number) : number{
    return num3? num1+num2+num3 : num1+num2;
}
console.log(add1(12,20));

// Required parameter
const sub1 = (num1: number, num2: number, num3=10) : number => num1-num2-num3;
console.log(sub1(2,3));
console.log(sub1(2,3,6));

// Rest Parameter

function add2(num1: number, num2: number, ...num3:number[]) : number{
    return num1+num2+num3.reduce((a,b) => a + b, 0);
}
// let numbers = [1,2,3,4,5];
// console.log(add2(2,3,...numbers));

console.log(add2(2,3,...[1,2,3,4,5]));  //both are same
console.log(add2(2,3,1,2,3,4,5));   //both are same


// Generic function

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
let concatString = getItems<string>(["a","b","c","d","e"]);

console.log(concatResult);
console.log(concatString);