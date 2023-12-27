let num = [1,2,3,4,5]
let b = num.toString()  // b is now a string
console.log(b)

// join method
let c = num.join("_")
console.log(c , typeof c)

// pop method
num.pop()  // It will removed last element from array
console.log(num)

//push method
num.push(33)  // It will add push element in last and return new array length
console.log(num)

// shift method
let r = num.shift()  // removes a element from the start of the array
console.log(r)
console.log(num)

// unshift method
num.unshift(99)   // add element in starting of the array
console.log(num)

// delete method
delete num[0]  // delete element but legth will remain same
console.log(num)

// concat method
// It concat two arrrays and return new array
// It does not change exising array
let num1 = [1,2,3,4,5]
let num2 = [11,22,33,44]
let newArray = num1.concat(num2)
console.log(newArray)

// // sort method
// let x= [33,1,3,55,7]  // It take as a string 
// console.log(x.sort())  // o/p= [ 1, 3, 33, 55, 7 ]

// sort method
let compare = (a,b)=>{
    return a-b
}
let x= [33,1,3,55,7]
x.sort(compare)
console.log(" After sorting : " + x)

// reverse method
console.log(" After Reverse : " + x.reverse())

// splice method
let y = [11,22,33,44,55,66]
y.splice(2,2,101,201,301)
console.log("Splic method : " + y)

// slice method
let z= [11,22,33,44,55]
console.log(z.slice(3)) // it does not modify original array

console.log(z.slice(2,4))
