// IIFE- Immediately Invoked Function Expressions
// IIFE is a JS Function that runs as soon as it is defined
// It is avoid polluting the global namespace, execute an async-await etc.

let a = () => {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(456)
    }, 4000)
})
}

// Without IIFE

// let f = async()=>{

//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// }

// f()


// Using IIFE

        (async()=>{

        let b = await a()
        console.log(b)
        let c = await a()
        console.log(c)
        let d = await a()
        console.log(d)
    }) ()