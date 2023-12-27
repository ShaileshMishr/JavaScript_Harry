for(let i=0; i<5;i++){
    console.log(i)
}

// wap to add first n natural numbers

let sum=0
let n = prompt("Enter the value of n")
n=Number.parseInt(n)
for(let i=0; i<n;i++){
    sum += (i+1)
}
console.log("Sum of first " + n + " Natural number is " +sum)


// For In loop

let obj ={
    kishan:90,
    Ram:80,
    Vikas:78,
    Shiv:50
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

// For of Loop

let obj1 ={
    kishan:90,
    Ram:80,
    Vikas:78,
    Shiv:50
}

for (let b of "Kishan"){
    console.log(b)
}



