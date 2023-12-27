// Q1- create an array of numbers and take input from the user to add numbers to this array

let arr = [1,2,3,4,5,6,7,83]
let a = prompt("Enter a number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)


// Q2- Keep adding numbers to the array in untill 0 is added to the areay.

let arr1 = [1,2,3,4,5,6,7,83]
let a1;
do{
 a1 = prompt("Enter a number")
a1=Number.parseInt(a1)
arr1.push(a1)
}
while(a1!=0);
console.log(arr1)


//Q3 filter for numbers devisible byv10 from a array

let arr3 = [10,20,30,40,5,6,7,83]
let a3 =arr3.filter((x)=>{
    return x%10==0;
})
console.log(a3)
// Q4 create a array of square of given no

let arr4 = [1,2,3,4]
let a4 = arr4.map((x)=>{
    return x*x;
})
console.log(a4)

//Q5- Factorial of no using reduce from array of first n natural numnbers

let arr5 = [1,2,3,4,5]
let a5 = arr5.reduce((x1,x2)=>{
    return x1*x2;
}) 
console.log(a5)