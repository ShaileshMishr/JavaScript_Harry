// Q1
let str = "Har\""
console.log(str.length)

// Q2- Explore includes , startswith and endswith function

const sentence= "Hello dear Kishan"
const word = "Kishan"

// includes
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence  `)

// startswith
console.log(" starts with Hello: " + sentence.startsWith("Hello"))

// ends with
console.log("ends with Bye:" + sentence.endsWith("Bye"))


// Q3- lower case
console.log(" Lower case : " + sentence.toLowerCase())

//Q4- Extract the amount out of the string
//  " Please give Rs 1000"

let str2= "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)


// Q4- change 4th character of a string

let str3 = "Suyash"
str3[3] = "A" // not possible because strings are immutable
console.log("After change : " + str3)
// we only replace the string
console.log("After replace : " + str3.replace("a","A"))