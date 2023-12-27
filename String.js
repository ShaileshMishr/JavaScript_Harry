let name = "Kishan"
console.log(name)
console.log(name.length)
console.log(name[0])
console.log(name[1])


let friend = 'Shivam'
console.log(friend)
console.log("Upper Case: "+  friend.toUpperCase())
console.log("Lower Case: "+  friend.toLowerCase())
console.log(friend.slice(2,4))
console.log(friend.slice(2))
console.log(friend.replace("hiv", "HIV"))

// trim
let x = "    Mukesh   "
console.log(x.trim())

// Template Literals
let boy1 = "Ram"
let boy2 = "Kishan"

//concat
console.log(boy1.concat(" is a friend of ", boy2, " OK"))

// Kishan is a friend of Ram
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape Sequence Characters
let fruit = 'Bana\'na'    // \n- new line \t- tab  \r- carriage return
console.log(fruit)
console.log(fruit.length)


// Using a for loop to print a string

let string = "Shailesh Mishra"
console.log(" Using for loop......")
for (let i=0; i<string.length;i++){
   
    console.log(string[i])
}

// strings are Immutable- we did not change string