let num = [3,5,1,2,4]
for(let i=0; i<num.length; i++){
    console.log(num[i])
}

// for each loop
console.log("For each loop square ......")
num.forEach((element)=>{
    console.log(element * element)
})

// Array.from
let name = "Kishan"
let arr = Array.from(name)
console.log(arr)

// for ..of loop
console.log(" For of loop ....")
for(let i of num){
    console.log(i)
}

// for in loop
console.log(" For in loop ....")
for(let i in num){
    console.log(num[i])
}



