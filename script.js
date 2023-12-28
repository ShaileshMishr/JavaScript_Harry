// alert("Hello")
console.log("Hey harry")

// JS Console Object

console.error("Hey this is an error")
console.assert(5>44)
console.assert(55>5)
console.assert;
console.clear;

// table
obj={a:1, b:2, c:3}
console.table(obj)

// warning
console.warn("Hey please don't drink soda")

// info
console.info("Hey this is an important")

console.table(console)
// time
console.time("a")
console.timeEnd("a")

// time loop for loop
console.time("forLoop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forLoop")

// time loop while loop
console.time("whileLoop")
let i =0;
while(i<5){
    console.log(233)
    i++;
}
console.timeEnd("whileLoop")
