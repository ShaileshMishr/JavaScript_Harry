let a = [1,2,3,4,null ,false, "Not"]
console.log(a)
console.log(a[0])
console.log(a[3])
console.log(a[6])
console.log(a[7])  // undefined index 7 does not exist
console.log(a.length)
a[7]= 33  // adding a new value in array
a[3]= 67  // changing a array 
console.log(a)
console.log(typeof a)

// print array using for loop
console.log("Using for loop......")
for(let i =0; i<a.length;i++){
    console.log(a[i])
}