// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
//  In JavaScript, closures are created every time a function is created, at function creation time.

message = "Good Global"
function hello1(){
    let message = "Good Morning"
    {
        let message = "Good Afternoon"
        console.log("Hello 1 " + message)
    }
    let c = function hello2(){
        console.log("I am c " + message)
    }
    return c
}
c= hello1()
c()

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Harry"
  return displayName;
}
let c1 = init();
c1()


function returnFunc() {
    const x = () => {
      let a = 1
      console.log(a)
      const y = () => {
        // let a = 2
        console.log(a)
        const z = () => {
          // let a = 3
          console.log(a)
        }
        z()
      }
      a = 999
      y()
    }
    return x
  }
  
  let a = returnFunc()
  a()
  