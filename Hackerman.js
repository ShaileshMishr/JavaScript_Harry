// Write a javascript program to pretend to look like a hacker
// Try to emulate a terminal using javascript logic and it should look to others as if you are hacking a system
// Try to display messages like:
        // Initializing Network
        // Connecting to service...
        // Retreiving username...
        // Username found....
        // Trying a combination of 4.5 Trillion passwords...
        // Password found...
        // Connecting to Facebook...

// Fool your friends into thinking that you are a hacker and have fun
// PROTIP: Try to use a green text on a black background 

// async function harry() {
        
// let a1 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Initializing Network........")
//         }, 2000)
//     })
    
//     let a2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Connecting to service........")
//         }, 4000)
//     })

//     let a3 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Retreiving username......")
//         }, 6000)
//     })
//     let a4 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Username found........")
//         }, 8000)
//     })
//     let a5 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Trying a combination of 4.5 Trillion passwords.........")
//         }, 10000)
//     })
//     let a6 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Password found..........")
//         }, 12000)
//     })
//     let a7 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Connecting to Facebook..........")
//         }, 14000)
//     })
    
    
//         let x1 = await a1
//         console.log(x1)
    
//         let x2= await a2
//         console.log(x2)

//         let x3= await a3
//         console.log(x3)

//         let x4= await a4
//         console.log(x4)

//         let x5= await a5
//         console.log(x5)

//         let x6= await a6
//         console.log(x6)

//         let x7= await a7
//         console.log(x7)
    
//       //  return [x, y]
//     }
    
//     harry();

    
let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username iamharry...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}

const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()